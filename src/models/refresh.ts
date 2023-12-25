export interface RefreshBody {
  "refresh-token": string;
}

export interface RefreshResponse {
  accessToken: string;
  refreshToken: string;
}