import { APIClient } from "../client";
import { User } from "../models/user";

export class UserAPI {
  constructor(private readonly api: APIClient) {}

  async get(): Promise<User> {
    const resp = (await this.api.get<User>('/api/user')).data;

    return resp;
  }
}