import { Expose } from "class-transformer";

export class RefreshBody {
  @Expose({ name: "refresh-token" })
  refresh_token: string;
}

export class RefreshResponse {
  @Expose({ name: "accessToken" })
  access_token: string;

  @Expose({ name: "refreshToken" })
  refresh_token: string;
}