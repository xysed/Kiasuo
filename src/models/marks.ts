export enum MarkStatus {
  Sick = "Б",
  WithoutReason = "Н",
  WithReason = "У"
}

export interface Mark {
  lesson_date: string;
  mark: number | number[] | MarkStatus;
  weight: number;
  remark: any; // TODO: change type
  slot: {
    text: string;
    short_text: string;
    remark: any;  // TODO: change type
  }
}

export interface MarksLesson {
  id: number;
  subject: string;
  color: string;
  marks: Mark[];
  averages: {
    for_student: (string|number)[];
    for_class: (string|number)[];
    predicted: (string|number)[];
    sickness: number;
    with_reason: number;
    without_reason: number;
  };
}

export interface Marks {
  lessons: MarksLesson[];
}