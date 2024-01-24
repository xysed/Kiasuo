import { Expose, Transform, Type } from "class-transformer";

export enum MarkStatus {
  Sick = "Б",
  WithoutReason = "Н",
  WithReason = "У"
}

export class Mark {
  @Expose({ name: "lesson_date" })
  date: string;

  @Transform(({ value }: { value: string }) => {
    if (["У", "Н", "Б"].includes(value))
      return MarkStatus[value as keyof typeof MarkStatus];

    if (value.indexOf("/") > -1)
      return value.split("/").map((v: string) => parseInt(v))

    return parseInt(value)
  })
  mark: number | number[] | MarkStatus;

  @Transform(({ value }) => parseFloat(value))
  weight: number;
  
  remark: string;
  slot: {
    text: string;
    short_text: string;
    remark: string;
  }
}

export class MarksLessonAverages {
  @Transform(({ value }) => value ? parseFloat(value[0]) : null)
  for_student: number | null;

  @Transform(({ value }) => value ? parseFloat(value[0]) : null)
  for_class: number | null;

  @Transform(({ value }) => value ? parseFloat(value[0]) : null)
  predicted: number | null;
  
  sickness: number;
  with_reason: number;
  without_reason: number;
}

export class MarksLesson {
  id: number;
  subject: string;
  color: string;
  
  @Type(() => Mark)
  marks: Mark[];

  @Type(() => MarksLessonAverages)
  averages: MarksLessonAverages;
}

export class Marks {
  @Type(() => MarksLesson)
  lessons: MarksLesson[];
}