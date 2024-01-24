import { Expose, Transform } from "class-transformer";

export class SchoolClass {
  id: number;
  name: string;
  ou: string;

  @Expose({ name: "study_year" })
  @Transform(({ value }) => value.split("/").map((y: string) => parseInt(y)))
  years: [number, number];
}
