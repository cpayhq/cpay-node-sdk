import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";

import { REST_URL } from "./constant";
import { request, Options as HttpOptions } from "./utils/httpClient";

dayjs.extend(utc);

export interface CpaySDKBaseOptions {
  publicKey: string;
  privateKey: string;

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

export class CpaySDKBase {
  options: Required<CpaySDKBaseOptions> = {} as Required<CpaySDKBaseOptions>;

  constructor(options?: Partial<CpaySDKBaseOptions>) {
    if (!options) {
      return;
    }
    this.setOptions(options);
  }
  setOptions(options: Partial<CpaySDKBaseOptions> = {}) {
    const { httpOptions, url, ...otherOptions } = options;

    Object.assign(this.options, {
      httpOptions: {
        ...DEFAUTL_HTTP_OPTIONS,
        ...(httpOptions || {}),
      },
      url: {
        rest: REST_URL,
        ...(url || {}),
      },
    });
    if (otherOptions) {
      Object.assign(this.options, otherOptions);
    }
  }
  _request = <T>(path: string, options: HttpOptions): Promise<T> => {
    return request<T>(path, {
      ...this.options.httpOptions,
      ...options,
    })
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
          }
        } catch (error) {
          this.errLogger(
            options.method as string,
            "-",
            path,
            "Parse Error",
            error
          );
        }
      })
      .catch((err) => {
        this.errLogger(options.method as string, "-", path, err);
      });
  };
  request = <T>(path: string, options: HttpOptions): Promise<T> => {
    if (!this.options.url.rest) {
      return Promise.reject("Rest url is required.");
    }
    return this._request<T>(`${this.options.url.rest}${path}`, options);
  };
  auth_get = <T = any>(
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

  auth_post = <T = any>(
    path: string,
    data: Record<string, any>,
    token: string
  ) => {
    const PATH = `${this.options.url.rest}${path}`;

    return this._request<T>(PATH, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      json: data,
    });
  };

  errLogger = (msg: string, ...arg: any[]) => {
    if (typeof this.options.errLogger === "function") {
      this.options.errLogger(msg, ...arg);
      return;
    }
    const prefix = `[${dayjs()
      .utcOffset(8)
      .format("YYYY-MM-DD HH:mm:ss")}] [ERROR] `;
    console.error(`${prefix} ${msg}`, ...arg);
  };
  outLogger = (msg: string, ...arg: any[]) => {
    if (typeof this.options.outLogger === "function") {
      this.options.outLogger(msg, ...arg);
      return;
    }
    const prefix = `[${dayjs()
      .utcOffset(8)
      .format("YYYY-MM-DD HH:mm:ss")}] [INFO] `;

    console.log(`${prefix} ${msg}`, ...arg);
  };
}
