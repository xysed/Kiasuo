import { APIClient } from "../client";
import { Marks } from "../models/marks";

export class MarksAPI {
  constructor(private readonly api: APIClient) {}

  async get(studyPeriodId: number, userId: number): Promise<Marks> {
    const resp = (await this.api.get<Marks>(`/api/lesson_marks/${studyPeriodId}`, {
      params: { id: userId }
    })).data;
  
    return resp;
  }
}