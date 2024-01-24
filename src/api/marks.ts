import { plainToClass } from "class-transformer";
import { APIClient } from "../client";
import { Marks } from "../models/marks";

export class MarksAPI {
  constructor(private readonly api: APIClient) {}

  /**
   * Получить оценки за четверть
   *
   * @param {number} studyPeriodId ID четверти
   * @param {number} userId ID ученика
   */
  async get(studyPeriodId: number, userId: number) {
    const resp = (
      await this.api.get(`/api/lesson_marks/${studyPeriodId}`, {
        params: { id: userId },
      })
    ).data;

    return plainToClass(Marks, resp);
  }
}
