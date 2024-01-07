import { Homework } from "./homework";
import { Mark } from "./marks";

export interface ScheduleLesson {
  lesson_event_id: number;
  color: string;
  subject: string;
  teacher: string;
  lesson_date: string;
  lesson_number: number;
  from: string;
  to: string;
  theme: string;
  created_homework_id: number;
  homework_to_check_ids: number[];
  marks: Mark[];
}

export interface Schedule {
  schedule: ScheduleLesson[];
  homeworks: Homework[];
}