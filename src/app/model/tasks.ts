import { TaskStatus } from "./enums/task-status";

export interface Task {
  id: number;
  userId: number;
  title: string;
  description?: string;
  status: TaskStatus;
  createdByUserId: number;
  creationTime: Date;
  dueDate: Date;  
}
