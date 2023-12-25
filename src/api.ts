import { UserAPI } from "./api/user";
import { APIClient } from "./client";
import { RefreshBody, RefreshResponse } from "./models/refresh";

export class KiasuoClient {
  private refreshToken: string;
  private readonly api: APIClient;
  public readonly user: UserAPI;

  constructor(accessToken: string, refreshToken: string) {  
    this.api = new APIClient(accessToken);
    this.user = new UserAPI(this.api);

    this.refreshToken = refreshToken;
  }

  async refreshAccessToken() {
    const resp = (await this.api.post<RefreshResponse, RefreshBody>("/refresh", {
      "refresh-token": this.refreshToken
    })).data;

    this.api.updateAccessToken(resp.accessToken);
    this.refreshToken = resp.refreshToken;
  }

  async logout() {
    await this.api.delete("/pwa_logout");
  }
}
