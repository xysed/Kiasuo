import { APIClient } from "../client";
import { User } from "../models/user";

/**
 * API для работы с пользователем
 */
export class UserAPI {
  constructor(private readonly api: APIClient) {}

  /**
   * Получить текущего пользователя
   * 
   * @returns {Promise<User>} 
   */
  async get(): Promise<User> {
    const resp = (await this.api.get<User>('/api/user')).data;

    return resp;
  }
}