export interface UserChild {
  id: number;
  first_name: string;
  last_name: string;
  middle_name: string;
  school_class: string;
  age: number;
  username?: string;
  can_create_login: boolean;
}

export interface User {
  id: number;
  parent?: any; // TODO: change type
  username?: string;
  vk_id?: number;
  children: UserChild[];
  notices: number;
}
