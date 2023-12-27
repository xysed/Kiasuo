import { APIClient } from "../client";
import { FinalMarks } from "../models/finalMarks";

export class FinalMarksAPI {
  constructor(private readonly api: APIClient) {}

  /**
   * Получить итоговые оценки
   * 
   * @param {number} classId ID класса
   * @param {number} userId ID ученика
   * @returns {Promise<FinalMarks>}
   */
  async get(classId: string, userId: number): Promise<FinalMarks> {
    const resp = (await this.api.get<FinalMarks>(`/api/student_marks/${classId}`, {
      params: { id: userId }
    })).data;
  
    return resp;
  }
}