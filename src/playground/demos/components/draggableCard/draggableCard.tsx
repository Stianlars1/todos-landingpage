"use client";
import { Tag2 } from "@/components/ui/tag2/tag/tags";
import { useBrowserInfo } from "@/hooks/useBrowserInfo";
import { Priority, TodoDTO } from "@/types/taskTypes";
import { DragDropIcon } from "@/utils/icons";
import { CSSProperties, useState } from "react";
import { MdRemoveCircle } from "react-icons/md";
import { StatusCodes } from "../../demoTypes";
import { TASKCARD_GROUP } from "../../utils";
import "./css/revealCard.css";
interface DraggableCardProps {
  task: TodoDTO;
  className?: string;
  categoryCode: StatusCodes;
  style?: CSSProperties;
  sortManual?: boolean;
  draggableColumnEditActive?: boolean;
  deleteTaskFromTasklist?: (idToRemove: number) => void;
  resetTaskList?: () => void;
}
export const DRAGGABLE_CARD_ID = "draggableCard";
export const DraggableCard = ({
  task,
  className = " ",
  categoryCode,
  style,
  draggableColumnEditActive = false,
  deleteTaskFromTasklist,
  resetTaskList,
}: DraggableCardProps) => {
  const { isMobile } = useBrowserInfo();
  const [isPerformingOperation, setIsPerformingOperation] = useState(false);
  const { todoId, title, description, priority, tags, content } = task;
  const expanded = false;

  const openTask = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target instanceof HTMLElement && event.target.nodeName === "H3") {
      return;
    }
    event.preventDefault();
  };

  const handleRemoveTask = async (event: React.MouseEvent<SVGElement>) => {
    event.stopPropagation();
    event.preventDefault();
    const todoId = task.todoId;

    // if todo is already in the deleted column and the user wants to actually delete it permanently
  };

  return (
    <div
      suppressHydrationWarning={true}
      aria-disabled={isPerformingOperation}
      className={`reveal-card  ${className} ${"reveal-card-sortable"}
      ${isPerformingOperation ? "reveal-card-permanently-deleting" : " "}`}
      data-group={TASKCARD_GROUP}
      data-status={categoryCode}
      onClick={openTask}
      style={style}
    >
      {draggableColumnEditActive && (
        <MdRemoveCircle
          onClick={handleRemoveTask}
          className={`reveal-card__remove`}
        />
      )}
      <div className="reveal-card__wrapper">
        <div className="reveal-card__wrapper__header">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
        <div className="reveal-card__wrapper__badges">
          <Tag2 variant="priority" priority={priority as Priority} />
          {tags && tags.length > 0 && (
            <Tag2 key={JSON.stringify(tags)} variant="tag" tags={tags} />
          )}
        </div>
        {content && expanded && (
          <div
            className="reveal-card__wrapper__content"
            dangerouslySetInnerHTML={{ __html: content }}
          />
        )}
      </div>

      <DragDropIcon
        id={DRAGGABLE_CARD_ID}
        data-label="REVEAL_CARD_DRAG_HANDLE"
        className="reveal-card-sort-manual-row-layout-handle"
      />
    </div>
  );
};
