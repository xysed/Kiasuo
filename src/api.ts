import { ApiClient } from './client';

export class KiasuoClient {
  constructor(token: string) {
    const apiClient = new ApiClient(token);
  }
}