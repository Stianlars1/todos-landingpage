"use client";
import { TodoDTO } from "@/types/taskTypes";
import { animations } from "@formkit/drag-and-drop";
import { useDragAndDrop } from "@formkit/drag-and-drop/react";
import { DraggableColumn } from "./components/draggableColumn";
import styles from "./css/taskDemo.module.css";
import { demoMockCategorizedTodos } from "./demoContent";
import { ColumnListDND, StatusCodes } from "./demoTypes";
import { COLUMN_GROUP } from "./utils";

export const TaskDemo = () => {
  const columnsList: ColumnListDND[] = Object.entries(
    demoMockCategorizedTodos,
  ).map(([categoryString, todosList]) => {
    let flatTasks: TodoDTO[] = [];

    flatTasks = todosList as TodoDTO[];

    return {
      column: categoryString as StatusCodes,
      tasks: flatTasks,
      categoryCode: categoryString as StatusCodes,
    };
  });
  const [parent, columns, setColumnsList, updateConfig] = useDragAndDrop<
    HTMLUListElement,
    ColumnListDND
  >(
    columnsList,

    {
      dragHandle: ".column-drag-handle",
      group: COLUMN_GROUP,
      name: "ColumnsListWrapper",
      plugins: [animations({ duration: 150 })],
      sortable: true,
    },
  );
  return (
    <>
      <ul
        ref={parent}
        className={`${styles.columnWrapper} ${COLUMN_GROUP} 
          
        `}
        data-group={COLUMN_GROUP}
      >
        {columns.map((columnObject: ColumnListDND, index: number) => (
          <DraggableColumn
            data-label={columnObject.column}
            key={columnObject.column}
            columnObject={columnObject}
            title={getColumnHeaderTitle(columnObject.column)}
          />
        ))}
      </ul>
    </>
  );
};

const getColumnHeaderTitle = (column: StatusCodes) => {
  switch (column) {
    case "CREATED":
      return "Created";
    case "PENDING":
      return "Pending";
    case "IN_PROGRESS":
      return "In Progress";
    case "COMPLETED":
      return "Completed";
    case "ON_HOLD":
      return "On Hold";
    case "CANCELLED":
      return "Cancelled";
    case "DELETED":
      return "Deleted";
    case "SOON_DUE":
      return "Soon due";
  }
};
