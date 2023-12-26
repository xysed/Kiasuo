import { Homework, HomeworkTask } from "../models/homework";
import { Schedule } from "../models/schedule";

export function getHomework(schedule: Schedule) {
  const tasks: HomeworkTask[] = [];

  for (const lesson of schedule.schedule) {
    for (const homeworkId of lesson.homework_to_check_ids) {
      const homework = schedule.homeworks.find((value: Homework) => homeworkId === value.id);

      if (homework) tasks.push({
        lesson,
        homework
      });
    }
  }

  return tasks;
}