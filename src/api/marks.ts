import { APIClient } from "../client";
import { Marks } from "../models/marks";

/**
 * API для работы с четвертными оценками
 */
export class MarksAPI {
  constructor(private readonly api: APIClient) {}

  /**
   * Получить оценки за четверть
   * 
   * @param {number} studyPeriodId ID четверти
   * @param {number} userId ID ученика
   * @returns {Promise<Marks>}
   */
  async get(studyPeriodId: number, userId: number): Promise<Marks> {
    const resp = (await this.api.get<Marks>(`/api/lesson_marks/${studyPeriodId}`, {
      params: { id: userId }
    })).data;
  
    return resp;
  }
}