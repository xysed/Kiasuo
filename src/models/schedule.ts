import { Expose, Type } from "class-transformer";
import { Homework, HomeworkTask } from "./homework";
import { Mark } from "./marks";

export class ScheduleLesson {
  @Expose({ name: "lesson_event_id" })
  id: number;

  color: string;
  subject: string;
  teacher: string;

  @Expose({ name: "lesson_number" })
  number: number;

  @Expose({ name: "lesson_date" })
  date: string;

  from: string;
  to: string;
  theme: string;

  @Expose({ name: "created_homework_id" })
  homework_id: number;

  homework_to_check_ids: number[];

  @Type(() => Mark)
  marks: Mark[];
}

export class Schedule {
  @Type(() => ScheduleLesson)
  schedule: ScheduleLesson[];

  @Type(() => Homework)
  homeworks: Homework[];
}
