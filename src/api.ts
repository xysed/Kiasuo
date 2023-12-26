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
  public readonly user: UserAPI;
  public readonly studyPeriods: StudyPeriodsAPI;
  public readonly schoolClasses: SchoolClassesAPI;
  public readonly schedule: ScheduleAPI;
  public readonly marks: MarksAPI;
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

  async refreshAccessToken(): Promise<RefreshResponse> {
    const resp = (await this.api.post<RefreshResponse, RefreshBody>("/refresh", {
      "refresh-token": this.refreshToken
    })).data;

    this.api.updateAccessToken(resp.accessToken);
    this.refreshToken = resp.refreshToken;

    return resp;
  }

  async logout() {
    await this.api.delete("/pwa_logout");
  }
}
