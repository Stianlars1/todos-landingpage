"use client";

import { useBrowserInfo } from "@/hooks/useBrowserInfo";
import { TodoDTO } from "@/types/taskTypes";
import {
  animations,
  handleDragoverNode,
  handleDragoverParent,
  handleDragstart,
  handleEnd,
  handleTouchOverNode,
  handleTouchOverParent,
  handleTouchmove,
  handleTouchstart,
  resetState,
} from "@formkit/drag-and-drop";
import { useDragAndDrop } from "@formkit/drag-and-drop/react";
import { useEffect, useState } from "react";
import taskWrapperStyles from "../css/taskwrapper.module.css";
import { StatusCodes } from "../demoTypes";
import { TASKCARD_GROUP } from "../utils";
import {
  DRAGGABLE_CARD_ID,
  DraggableCard,
} from "./draggableCard/draggableCard";
import { DropHere } from "./dropHere";

export const TaskCardWrapper = ({
  categoryCode,
  tasks,
}: {
  categoryCode: StatusCodes;
  tasks: TodoDTO[];
}) => {
  // States
  const { isMobile } = useBrowserInfo();
  const [isDragging, setIsDragging] = useState(false);
  const [showHiddenTasks, setShowHiddenTasks] = useState(false);

  // defining the tasksList

  // only show first 5 tasks
  // The drag and drop hook-component
  const [parent, tasksList, setTaskList] = useDragAndDrop<
    HTMLUListElement,
    TodoDTO
  >(tasks, {
    group: TASKCARD_GROUP,
    plugins: [animations()],
    name: TASKCARD_GROUP,
    sortable: true,
    draggingClass: "dragging",
    touchDraggingClass: "dragging",
    dragHandle: ".reveal-card-sort-manual-row-layout-handle",

    draggable: (el) => {
      return el.attributes.getNamedItem("data-group")?.value == TASKCARD_GROUP;
    },

    handleDragstart: (data) => {
      if (!parent.current) return;
      handleDragstart(data);

      if (data.e.dataTransfer?.dropEffect === "move") {
        setIsDragging(true);
      }
    },
    longTouch: false,
    handleTouchstart: (data) => {
      if (isMobile) {
        if (data.e.target instanceof HTMLElement) {
          if (data.e.target.id !== DRAGGABLE_CARD_ID) {
            return;
          }
        }
      }
      return handleTouchstart(data);
    },

    handleDragoverNode: async (data) => {
      return handleDragoverNode(data);
    },
    handleTouchOverNode: async (data) => {
      return handleTouchOverNode(data);
    },

    handleTouchOverParent: async (data) => {
      return handleTouchOverParent(data);
    },
    handleTouchmove: async (data) => {
      return handleTouchmove(data);
    },
    handleDragoverParent: (data) => {
      return handleDragoverParent(data);
    },

    handleEnd: async (data) => {
      if (isMobile) {
        if (data.e.target instanceof HTMLElement) {
          if (data.e.target.id !== DRAGGABLE_CARD_ID) {
            return;
          }
        }
      }
      handleEnd(data);
      setIsDragging(false);

      return;
    },
  });

  useEffect(() => {
    if (isMobile) {
      setTaskList(tasks);
      resetState();
    }
  }, [isMobile]);

  const resetTaskList = () => {
    setTaskList(tasks);
    resetState();
  };

  const handleShowHiddenTasks = () => {
    setTaskList(tasks);
    setShowHiddenTasks(!showHiddenTasks);
    resetState();
    // closing, scroll into view
    if (showHiddenTasks) {
      const el = document.getElementById(categoryCode);
      const body = document.body;
      if (el && body) {
        body.scrollBy({
          top: el.getBoundingClientRect().top - 150,
          behavior: "smooth",
        });
      }
    }
  };

  return (
    <>
      <div
        suppressHydrationWarning={true}
        className={`${taskWrapperStyles.taskContainer} `}
      >
        <ul
          id={categoryCode}
          ref={parent}
          data-group={TASKCARD_GROUP}
          data-column-status={categoryCode}
          className={`${taskWrapperStyles.taskListWrapper} `}
        >
          {tasksList &&
            tasksList.length > 0 &&
            tasksList.map((task: TodoDTO) => (
              <DraggableCard
                key={task.todoId}
                task={task}
                categoryCode={categoryCode}
                resetTaskList={resetTaskList}
              />
            ))}

          {tasksList.length === 0 && <DropHere />}
        </ul>
      </div>
    </>
  );
};
