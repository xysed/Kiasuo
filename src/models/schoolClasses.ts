export interface SchoolClass {
  id: number;
  name: string;
  start: string;
  end: string;
  ou: string;
}

export type SchoolClasses = SchoolClass[];
