import { APIClient } from "../client";
import { FinalMarks } from "../models/finalMarks";

export class FinalMarksAPI {
  constructor(private readonly api: APIClient) {}

  async get(classId: string, userId: number): Promise<FinalMarks> {
    const resp = (await this.api.get<FinalMarks>(`/api/student_marks/${classId}`, {
      params: { id: userId }
    })).data;
  
    return resp;
  }
}