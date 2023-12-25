import { UserAPI } from "./api/user";
import { APIClient } from "./client";

export class KiasuoClient {
  public readonly user: UserAPI;

  constructor(accessToken: string, refreshToken: string) {
    const api = new APIClient(accessToken, refreshToken);

    this.user = new UserAPI(api);
  }
}
