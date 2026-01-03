"use client";

import { DragDropIcon } from "@/utils/icons";
import { useState } from "react";
import draggableColumn from "../css/draggableColumn.module.css";
import { ColumnListDND } from "../demoTypes";
import { COLUMN_GROUP } from "../utils";
import { TaskCardWrapper } from "./TaskCardWrapper";
export const DraggableColumn = ({
  columnObject,
  title,
}: {
  columnObject: ColumnListDND;
  title: string;
}) => {
  const [draggableColumnEditActive, setDraggableColumnEditActive] =
    useState(false);

  const handleColumnEditClick = () => {
    setDraggableColumnEditActive(!draggableColumnEditActive);
  };
  return (
    <>
      <li
        className={`${draggableColumn.column} ${COLUMN_GROUP}`}
        key={columnObject.column}
        data-group={COLUMN_GROUP}
        data-label={columnObject.column}
        style={{ listStyleType: "none" }}
      >
        <header id="no-drag" className={draggableColumn.header}>
          <h2 className={draggableColumn.headerTitle}>{title}</h2>
          <div className={draggableColumn.headerButtons}>
            <DragDropIcon
              id="dragHandle"
              className={`${draggableColumn.columnDragButtonSVG} column-drag-handle `}
            />
          </div>
        </header>
        <TaskCardWrapper
          categoryCode={columnObject.categoryCode}
          tasks={columnObject.tasks}
        />
      </li>
    </>
  );
};
