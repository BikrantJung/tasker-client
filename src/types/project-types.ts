import { ITask } from "./task-types";
import { IUser } from "./user-types";

export interface IProject {
  project_title: string;
  project_description?: string;
  tasks: ITask[];
  users: IUser[];
}
