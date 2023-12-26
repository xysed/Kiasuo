export interface HomeworkAttachment {
  url: string;
  title: string;
}

export interface Homework {
  id: number;
  lesson_date: string;
  check_at: string;
  text: string;
  files: HomeworkAttachment[];
  links: HomeworkAttachment[];
}