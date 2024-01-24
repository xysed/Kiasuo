import { Expose, Type } from "class-transformer";
import { ScheduleLesson } from "./schedule";

export class HomeworkAttachment {
  url: string;
  title: string;
}

export class Homework {
  id: number;
  
  @Expose({ name: "lesson_date" })
  date: string;
  check_at: string;
  text: string;

  @Type(() => HomeworkAttachment)
  files: HomeworkAttachment[];

  @Type(() => HomeworkAttachment)
  links: HomeworkAttachment[];
}

export class HomeworkTask {
  @Type(() => ScheduleLesson)
  lesson: ScheduleLesson;

  @Type(() => Homework)
  homework: Homework;
}