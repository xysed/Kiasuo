import { plainToClass } from "class-transformer";
import { APIClient } from "../client";
import { StudyPeriod } from "../models/studyPeriods";

export class StudyPeriodsAPI {
  constructor(private readonly api: APIClient) {}

  /**
   * Получить четверти
   *
   * @param {number} userId ID ученика
   */
  async get(userId: number) {
    const resp = (
      await this.api.get("/api/study_periods", {
        params: { id: userId },
      })
    ).data;

    return plainToClass(StudyPeriod, resp);
  }
}
