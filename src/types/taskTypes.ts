export interface TodoDTO {
  todoId: number;
  title: string;
  description?: string;
  status: TodoStatus;
  priority?: TodoPriority;
  dueDate?: Date;
  createdAt: Date;
  updatedAt: Date;
  files?: FilesType;
  content?: string;
  tags: TagsType;
  sortIndex: number;
}

export enum Priority {
  LOW = "LOW",
  MEDIUM = "MEDIUM",
  HIGH = "HIGH",
}

export type TodoPriority = Priority | undefined;

export type TagsType = string[];
export type FilesType = FileDTO[];
export type FileDTO = {
  fileId: number;
  fileName: string;
  mimeType: string;
  fileSize: number;
  uploadedAt: Date;
  fileData: any;
};
export type status = TodoStatus;
export type TodoStatus = {
  statusId: number;
  statusCode: StatusCode;
  statusName: string;
  description: string;
};

export type StatusCode =
  | "CREATED"
  | "PENDING"
  | "IN_PROGRESS"
  | "COMPLETED"
  | "ON_HOLD"
  | "CANCELLED"
  | "DELETED";
