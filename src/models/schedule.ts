import { Homework } from "./homework";
import { Mark } from "./marks";

export interface ScheduleLesson {
  id: string;
  color: string;
  subject: string;
  teacher: string;
  date: string;
  number: number;
  start: string;
  end: string;
  theme: string;
  homework: Homework;
  homework_to_check: Homework[];
  marks: Mark[];
}

export interface Schedule {
  schedule: ScheduleLesson[];
  homework: Homework[];
}