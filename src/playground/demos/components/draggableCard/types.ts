import { StatusCode, TodoPriority } from "@/types/taskTypes";
import { ReactElement, ReactNode } from "react";

export interface RevealCardProps {
  title: string;
  description?: string;
  content: ReactNode | ReactElement | null | undefined | string;
  tags?: string[];
  priority?: TodoPriority;
  todoId: number;
  className?: string;
  statusCode?: StatusCode;
}
