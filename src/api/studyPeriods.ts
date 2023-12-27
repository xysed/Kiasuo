import { APIClient } from "../client";
import { StudyPeriods } from "../models/studyPeriods";

/**
 * API для работы с четвертями
 */
export class StudyPeriodsAPI {
  constructor(private readonly api: APIClient) {}

  /**
   * Получить четверти
   * 
   * @param {number} userId ID ученика
   * @returns {Promise<StudyPeriods>}
   */
  async get(userId: number): Promise<StudyPeriods> {
    const resp = (await this.api.get<StudyPeriods>('/api/study_periods', {
      params: { id: userId }
    })).data;

    return resp;
  }
}