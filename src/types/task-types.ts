import { IProject } from "./project-types";
import { IUser } from "./user-types";

export interface ITask {
  task_title: string;
  task_description?: string;
  users: IUser[];
  task_end_date?: Date;
  project?: IProject;
}
