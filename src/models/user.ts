import { Expose, Type } from "class-transformer";

export class UserChild {
  id: number;
  age: number;
  username?: string;
  first_name: string;
  last_name: string;
  middle_name: string;
  school_class: string;
  can_create_login: boolean;
}

export class User {
  id: number;
  parent?: any; // TODO: change type
  username?: string;
  vk_id?: number;

  @Type(() => UserChild)
  children: UserChild[];

  @Expose({ name: "unread_notices_count" })
  notices: number;
}
