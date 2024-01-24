import { plainToClass } from "class-transformer";
import { APIClient } from "../client";
import { SchoolClass } from "../models/schoolClasses";

export class SchoolClassesAPI {
  constructor(private readonly api: APIClient) {}

  /**
   * Получить классы
   *
   * @param {number} userId ID ученика
   */
  async get(userId: number) {
    const resp = (
      await this.api.get("/api/school_classes", {
        params: { id: userId },
      })
    ).data;

    return plainToClass(SchoolClass, resp);
  }
}
