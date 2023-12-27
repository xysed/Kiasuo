import { APIClient } from "../client";
import { Schedule } from "../models/schedule";

export class ScheduleAPI {
  constructor(private readonly api: APIClient) {}

  /**
   * Получить расписание и домашнее задание.
   * 
   * Домашнее задание на выбранную неделю можно получить с помощью функции getHomework
   * 
   * @param {number} week Неделя
   * @param {number} year Год
   * @param {number} userId ID ученика
   * @returns {Promise<Schedule>}
   */
  async get(week: number, year: number, userId: number): Promise<Schedule> {
    const resp = (await this.api.get<Schedule>('/api/schedule', {
      params: { week, year, id: userId }
    })).data;
  
    return resp;
  }
}