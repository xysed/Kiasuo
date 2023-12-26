export interface FinalMarksType {
  id: number;
  text: string;
  short_text: string;
  order_by: number;
}

export interface FinalMarksLesson {
  id: number;
  subject: string;
  color: string;
  marks: { [key: string]: number | string };
}

export interface FinalMarks {
  standard_mark_type: FinalMarksType[];
  lessons: FinalMarksLesson[];
}