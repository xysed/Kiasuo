import { Expose, Type } from "class-transformer";

export class FinalMarksType {
  id: number;
  order_by: number;

  @Expose({ name: "text" })
  name: string;

  @Expose({ name: "short_text" })
  short_name: string;
}

export class FinalMarksLesson {
  id: number;
  subject: string;
  color: string;
  marks: { [key: string]: number | string };
}

export class FinalMarks {
  @Type(() => FinalMarksLesson)
  lessons: FinalMarksLesson[];

  @Expose({ name: "standard_mark_type" })
  @Type(() => FinalMarksType)
  mark_types: FinalMarksType[];
}
