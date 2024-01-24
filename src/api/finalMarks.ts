import { plainToClass } from "class-transformer";
import { APIClient } from "../client";
import { FinalMarks } from "../models/finalMarks";

export class FinalMarksAPI {
  constructor(private readonly api: APIClient) {}

  /**
   * Получить итоговые оценки
   *
   * @param {number} classId ID класса
   * @param {number} userId ID ученика
   */
  async get(classId: string, userId: number) {
    const resp = (
      await this.api.get(`/api/student_marks/${classId}`, {
        params: { id: userId },
      })
    ).data;

    return plainToClass(FinalMarks, resp);
  }
}
