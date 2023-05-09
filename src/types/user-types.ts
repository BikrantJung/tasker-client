import { IProject } from "./project-types";
import { ITask } from "./task-types";

export interface IUser {
  id: string;
  username: string;
  avatar?: string;
  email: string;
  projects: IProject[];
  tasks: ITask[];
}
export type UserWithToken = {
  access_token: string;
} & IUser;
