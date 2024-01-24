import { FinalMarksAPI } from "./api/finalMarks";
import { MarksAPI } from "./api/marks";
import { ScheduleAPI } from "./api/schedule";
import { SchoolClassesAPI } from "./api/schoolClasses";
import { StudyPeriodsAPI } from "./api/studyPeriods";
import { UserAPI } from "./api/user";
import { APIClient } from "./client";
import { RefreshBody, RefreshResponse } from "./models/refresh";

export class KiasuoClient {
  private refreshToken: string;
  private readonly api: APIClient;

  /**
   * API для работы с пользователем
   */
  public readonly user: UserAPI;

  /**
   * API для работы с четвертями
   */
  public readonly studyPeriods: StudyPeriodsAPI;

  /**
   * API для работы с классами
   */
  public readonly schoolClasses: SchoolClassesAPI;

  /**
   * API для работы с расписанием и домашней работой
   */
  public readonly schedule: ScheduleAPI;

  /**
   * API для работы с четвертными оценками
   */
  public readonly marks: MarksAPI;

  /**
   * API для работы с итоговыми оценками
   */
  public readonly finalMarks: FinalMarksAPI;

  constructor(accessToken: string, refreshToken: string) {
    this.api = new APIClient(accessToken);

    this.user = new UserAPI(this.api);
    this.studyPeriods = new StudyPeriodsAPI(this.api);
    this.schoolClasses = new SchoolClassesAPI(this.api);
    this.schedule = new ScheduleAPI(this.api);
    this.marks = new MarksAPI(this.api);
    this.finalMarks = new FinalMarksAPI(this.api);

    this.refreshToken = refreshToken;
  }

  /**
   * Обновить токены
   *
   * @returns {Promise<RefreshResponse>}
   */
  async refresh(): Promise<RefreshResponse> {
    const resp = (
      await this.api.post<RefreshResponse>("/refresh", {
        refreshToken: this.refreshToken,
      })
    ).data;

    this.api.updateAccessToken(resp.access_token);
    this.refreshToken = resp.refresh_token;

    return resp;
  }

  /**
   * Выйти из аккаунта
   */
  async logout() {
    await this.api.delete("/pwa_logout");
  }
}
