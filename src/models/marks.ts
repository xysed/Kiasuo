export enum MarkStatus {
  Sick = "Б",
  WithoutReason = "Н",
  WithReason = "У"
}

export interface Mark {
  date: string;
  mark: number | number[] | MarkStatus;
  weight: number;
  remark: any; // TODO: change type
  description: {
    name: string;
    short_name: string;
    remark: any;  // TODO: change type
  }
}

export interface MarksLesson {
  id: number;
  subject: string;
  color: string;
  marks: Mark[];
  averages: {
    student: number;
    overall: number;
    predict: number;
  };
  missings: {
    sickness: number;
    with_reason: number;
    without_reason: number;
  }
}

export interface Marks {
  lessons: MarksLesson[];
}