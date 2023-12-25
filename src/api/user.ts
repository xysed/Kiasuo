import { APIClient } from "../client";
import { User } from "../models/user";

export class UserAPI {
  constructor(private readonly api: APIClient) {}

  async get(): Promise<User> {
    const resp = (await this.api.get('/api/user')).data;

    return {
      id: resp.id,
      parent: resp.parent,
      username: resp.username,
      vk_id: resp.vk_id,
      children: resp.children,
      notices: resp.unread_notices_count
    }
  }
}