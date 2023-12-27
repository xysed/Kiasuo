import { APIClient } from "../client";
import { SchoolClasses } from "../models/schoolClasses";

/**
 * API для работы с классами
 */
export class SchoolClassesAPI {
  constructor(private readonly api: APIClient) {}

  /**
   * Получить классы
   * 
   * @param {number} userId ID ученика
   * @returns {Promise<SchoolClasses>}
   */
  async get(userId: number): Promise<SchoolClasses> {
    const resp = (await this.api.get<SchoolClasses>('/api/school_classes', {
      params: { id: userId }
    })).data;
  
    return resp;
  }
}