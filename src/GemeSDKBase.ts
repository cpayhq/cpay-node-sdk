import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import _ from "lodash";

import { REST_URL } from "./constant";
import { GemeToken, IGetToken } from "./interfaces/geme.interface";
import { request, Options as HttpOptions } from "./utils/httpClient";

dayjs.extend(utc);

export interface GemeSDKBaseOptions {
  publicKey?: string;
  privateKey?: string;

  walletId?: string;
  passphrase?: string;

  errLogger?: (mssage: string, ...arg: any[]) => void;

  outLogger?: (mssage: string, ...arg: any[]) => void;

  httpOptions?: HttpOptions;
  url?: {
    rest?: string;
  };
}

const DEFAUTL_HTTP_OPTIONS = {
  headers: {
    "Content-Type": "application/json",
    "User-Agent":
      "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.71 Safari/537.36",
  },
  timeout: 6000,
};

export class GemeSDKBase {
  protected options: Required<GemeSDKBaseOptions> =
    {} as Required<GemeSDKBaseOptions>;

  constructor(options?: Partial<GemeSDKBaseOptions>) {
    if (!options) {
      return;
    }
    this.setOptions(options);
  }
  protected setOptions(options: Partial<GemeSDKBaseOptions> = {}) {
    const { httpOptions, url, ...otherOptions } = options;

    _.merge(this.options, {
      httpOptions: _.merge({}, DEFAUTL_HTTP_OPTIONS, httpOptions || {}),
      url: {
        rest: REST_URL,
        ...(url || {}),
      },
    });
    if (otherOptions) {
      _.merge(this.options, otherOptions);
    }
  }
  protected _request = <T>(path: string, options: HttpOptions): Promise<T> => {
    return request<T>(path, _.merge({}, this.options.httpOptions, options))
      .then((data: any) => {
        try {
          const json = JSON.parse(data);
          if (json) {
            return json.data || json;
          } else {
            this.errLogger(
              options.method as string,
              "-",
              path,
              json.data.message
            );
            return Promise.reject(json.data.message);
          }
        } catch (error) {
          this.errLogger(
            options.method as string,
            "-",
            path,
            "Parse Error",
            error
          );
          return Promise.reject(error);
        }
      })
      .catch((err) => {
        this.errLogger(options.method as string, "-", path, err);
        return Promise.reject(err);
      });
  };

  protected request = <T>(path: string, options: HttpOptions): Promise<T> => {
    if (!this.options.url.rest) {
      return Promise.reject("Rest url is required.");
    }
    return this._request<T>(`${this.options.url.rest}${path}`, options);
  };

  protected auth_get = <T = any>(
    path: string,
    params: Record<string, any> = {} as Record<string, any>,
    token: string
  ) => {
    if (!this.options.url.rest) {
      return Promise.reject("Rest url is required.");
    }
    const PATH = `${this.options.url.rest}${path}`;

    return this._request<T>(PATH, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      searchParams: params,
    });
  };

  protected auth_post = <T = any>(
    path: string,
    data: Record<string, any>,
    token: string
  ) => {
    const PATH = `${this.options.url.rest}${path}`;

    const { idempotencyKey, ...payload } = data;

    const headers: Record<string, string> = {
      Authorization: `Bearer ${token}`,
    };

    if (idempotencyKey) {
      headers["idempotency-key"] = idempotencyKey;
    }

    return this._request<T>(PATH, {
      method: "POST",
      headers,
      json: payload,
    });
  };

  protected post = <T = any>(path: string, data: Record<string, any>) => {
    const PATH = `${this.options.url.rest}${path}`;

    return this._request<T>(PATH, {
      method: "POST",
      json: data,
    });
  };

  protected auth_delete = <T = any>(
    path: string,
    data: Record<string, any>,
    token: string
  ) => {
    const PATH = `${this.options.url.rest}${path}`;

    return this._request<T>(PATH, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      json: data,
    });
  };

  protected auth_patch = <T = any>(
    path: string,
    data: Record<string, any>,
    token: string
  ) => {
    const PATH = `${this.options.url.rest}${path}`;

    return this._request<T>(PATH, {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      json: data,
    });
  };

  protected errLogger = (msg: string, ...arg: any[]) => {
    if (typeof this.options.errLogger === "function") {
      this.options.errLogger(msg, ...arg);
      return;
    }
    const prefix = `[${dayjs()
      .utcOffset(8)
      .format("YYYY-MM-DD HH:mm:ss")}] [ERROR] `;
    console.error(`${prefix} ${msg}`, ...arg);
  };

  protected outLogger = (msg: string, ...arg: any[]) => {
    if (typeof this.options.outLogger === "function") {
      this.options.outLogger(msg, ...arg);
      return;
    }
    const prefix = `[${dayjs()
      .utcOffset(8)
      .format("YYYY-MM-DD HH:mm:ss")}] [INFO] `;

    console.log(`${prefix} ${msg}`, ...arg);
  };

  protected auth(
    publicKey: string,
    privateKey: string,
    walletId?: string,
    passphrase?: string
  ): Promise<GemeToken> {
    if (this.options.publicKey && this.options.privateKey) {
      const path = `/api/public/auth`;
      let data = {
        publicKey,
        privateKey,
      };

      if (walletId) {
        data = Object.assign(data, { walletId });
        if (!passphrase) {
          throw new Error("Passphrase is required.");
        }
        data = Object.assign(data, { passphrase });
      }

      return this.request<GemeToken>(`${path}`, {
        method: "POST",
        json: data,
      });
    } else {
      throw new Error("Keys is required.");
    }
  }

  protected async getToken(isWallet = false): Promise<string> {
    if (isWallet) {
      if (!this.options.walletId || !this.options.passphrase) {
        throw new Error("WalletId and passphrase is required.");
      }
    }
    const { token } = await this.auth(
      this.options.publicKey,
      this.options.privateKey,
      this.options?.walletId,
      this.options?.passphrase
    );
    return token;
  }
}
