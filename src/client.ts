import axios, {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  isAxiosError,
} from 'axios';

import { RESTError } from './errors/errors';

const BASE_URL = 'https://dnevnik.kiasuo.ru';
const VERSION = '1.0.0';

export class ApiClient {
  constructor(private readonly token: string) {}

  public async get<T>(url: string, config?: AxiosRequestConfig<any>) {
    const client = this.createClient();

    try {
      return this.processResponse(await client.get<T>(url, config));
    } catch (err) {
      this.handleError(err);
    }
  }

  public async post<T>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig<any>,
  ) {
    const client = this.createClient();

    try {
      return this.processResponse(await client.post<T>(url, data, config));
    } catch (err) {
      this.handleError(err);
    }
  }

  private processResponse(response: AxiosResponse) {
    if (response.data.status === 'error') {
      throw new RESTError({
        message: response.data.msg
      });
    }

    return response.data.data;
  }

  private createClient(): AxiosInstance {
    return axios.create({
      baseURL: BASE_URL,
      headers: {
        'User-Agent': `kiasuo-client-ts/${VERSION}`,
        authorization: `Bearer ${this.token}`,
      },
      maxRedirects: 0,
    });
  }

  private handleError(err: any): never {
    if (isAxiosError(err)) {
      if (err.response)
        throw new RESTError({
          message: err.response.data.msg,
        });
    }

    throw err;
  }
}
