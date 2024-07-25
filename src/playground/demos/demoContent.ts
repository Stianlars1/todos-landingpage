import { Priority, TodoDTO } from "@/types/taskTypes";

export const demoMockTasksArray: TodoDTO[] = [
  {
    todoId: 106,
    title: "Denne går ut 30. Juni",
    description: "",
    status: {
      statusId: 7,
      statusCode: "CREATED",
      statusName: "Created",
      description: "Task has been created",
    },
    priority: Priority.MEDIUM,
    dueDate: new Date("2024-06-30T23:59:59"),
    createdAt: new Date("2024-06-30T00:00:00"),
    updatedAt: new Date("2024-06-30T00:00:00"),
    files: [],
    content: undefined,
    tags: [],
    sortIndex: 6,
  },
  {
    todoId: 101,
    title: "Denne går ut 1. Juli",
    description: "",
    status: {
      statusId: 7,
      statusCode: "CREATED",
      statusName: "Created",
      description: "Task has been created",
    },
    priority: Priority.MEDIUM,
    dueDate: new Date("2024-07-01T23:59:59"),
    createdAt: new Date("2024-07-01T00:00:00"),
    updatedAt: new Date("2024-07-01T00:00:00"),
    files: [],
    content: undefined,
    tags: [],
    sortIndex: 1,
  },
  {
    todoId: 102,
    title: "Denne går ut 2. Juli",
    description: "",
    status: {
      statusId: 7,
      statusCode: "CREATED",
      statusName: "Created",
      description: "Task has been created",
    },
    priority: Priority.MEDIUM,
    dueDate: new Date("2024-07-02T23:59:59"),
    createdAt: new Date("2024-07-02T00:00:00"),
    updatedAt: new Date("2024-07-02T00:00:00"),
    files: [],
    content: undefined,
    tags: [],
    sortIndex: 2,
  },
];

export const demoMockCategorizedTodos = {
  CREATED: [demoMockTasksArray[1]],
  IN_PROGRESS: [demoMockTasksArray[0]],
  COMPLETED: [demoMockTasksArray[2]],
};
