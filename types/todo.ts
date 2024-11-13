export enum Priority {
  High = "10",
  Normal = "20",
  Low = "30"
}

export type ToDo = {
  id: string;
  toDoText: string;
  location: string;
  priority: Priority;
  dueDate: Date;
};