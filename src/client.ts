import axios, {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  isAxiosError,
} from "axios";

import { HttpError, RESTError } from "./errors/errors";

const BASE_URL = "https://dnevnik.kiasuo.ru/diary";
const VERSION = "1.2.1";

export class APIClient {
  constructor(private accessToken: string) {}

  public async get<T = any>(url: string, config?: AxiosRequestConfig<any>) {
    const client = this.createClient();
    let resp: AxiosResponse<T>;

    try {
      resp = await client.get<T>(url, config);
    } catch (err) {
      this.handleError(err);
    }

    return resp;
  }

  public async post<T = any, D = any>(
    url: string,
    data?: D,
    config?: AxiosRequestConfig<D>
  ) {
    const client = this.createClient();
    let resp: AxiosResponse<T>;

    try {
      resp = await client.post<T, AxiosResponse<T>, D>(url, data, config);
    } catch (err) {
      this.handleError(err);
    }

    return resp;
  }

  public async delete<T = any>(
    url: string,
    config?: AxiosRequestConfig<any>
  ) {
    const client = this.createClient();
    let resp: AxiosResponse<T>;

    try {
      resp = await client.delete<T>(url, config);
    } catch (err) {
      this.handleError(err);
    }

    return resp;
  }

  public updateAccessToken(token: string) {
    this.accessToken = token;
  }

  private handleError(err: unknown): never {
    if (isAxiosError(err)) {
      if (
        err.response &&
        typeof err.response.data === "object" &&
        (err.response.data as Object).hasOwnProperty("msg")
      )
        throw new RESTError({
          message: err.response.data.msg,
        });
      
      if (err.response) {
        throw new HttpError({
          status: err.response.status
        });
      }
    }

    throw err;
  }

  private createClient(): AxiosInstance {
    return axios.create({
      baseURL: BASE_URL,
      responseType: "json",
      headers: {
        "User-Agent": `kiasuo-ts/${VERSION}`,
        authorization: `Bearer ${this.accessToken}`,
      },
    });
  }
}
