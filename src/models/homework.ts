export interface HomeworkAttachment {
  url: string;
  title: string;
}

export interface Homework {
  id: number;
  created_at: string;
  date: string;
  content: string;
  files: HomeworkAttachment[];
  links: HomeworkAttachment[];
}