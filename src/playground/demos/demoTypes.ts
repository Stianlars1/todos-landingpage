import { TodoDTO } from "@/types/taskTypes";

export interface ColumnListDND {
  column: StatusCodes;
  categoryCode: StatusCodes;
  tasks: TodoDTO[];
}

export type StatusCodes =
  | "CREATED"
  | "PENDING"
  | "IN_PROGRESS"
  | "COMPLETED"
  | "ON_HOLD"
  | "CANCELLED"
  | "DELETED"
  | "SOON_DUE";

export type CategorizedTodosDTO = {
  [key in StatusCodes]:
    | TodoDTO[]
    | {
        [key in SoonDueSubCategories]: TodoDTO[];
      };
};

export type SoonDueSubCategories =
  | "Due Today"
  | "Due Tomorrow"
  | "Due in 2 Days"
  | "Due in 3 Days";
