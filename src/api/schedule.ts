import { APIClient } from "../client";
import { Schedule } from "../models/schedule";

export class ScheduleAPI {
  constructor(private readonly api: APIClient) {}

  async get(week: number, year: number, userId: number): Promise<Schedule> {
    const resp = (await this.api.get<Schedule>('/api/schedule', {
      params: { week, year, id: userId }
    })).data;
  
    return resp;
  }
}