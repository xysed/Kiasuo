export interface FinalMarksType {
  id: number;
  name: string;
  short_name: string;
  order_by: number;
}

export interface FinalMarksLesson {
  id: number;
  subject: string;
  color: string;
  marks: { [key: string]: number | string };
}

export interface FinalMarks {
  mark_types: FinalMarksType[];
  lessons: FinalMarksLesson[];
}