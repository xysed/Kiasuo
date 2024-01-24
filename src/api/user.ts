import { plainToClass } from "class-transformer";
import { APIClient } from "../client";
import { User } from "../models/user";

export class UserAPI {
  constructor(private readonly api: APIClient) {}

  /**
   * Получить текущего пользователя
   */
  async get(): Promise<User> {
    const resp = (await this.api.get("/api/user")).data;

    return plainToClass(User, resp);
  }
}
