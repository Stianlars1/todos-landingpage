"use client";
import { Tag2 } from "@/components/ui/tag2/tag/tags";
import { Priority, TagsType, TodoPriority } from "@/types/taskTypes";
import { CSSProperties, useEffect, useState } from "react";
import "./css/taskCard.css";

export const TaskCard = ({
  title,
  isInView,
  description,
  tags,
  priority,
  style = undefined,
  index,
}: {
  title: string;
  description: string;
  tags: TagsType;
  priority: TodoPriority;
  style?: CSSProperties;
  isInView: boolean;
  index: number;
}) => {
  const [animationClassName, setAnimationClassName] = useState(
    getInitialAnimationClassname(index)
  );

  useEffect(() => {
    if (isInView) {
      setAnimationClassName(getAnimationClassname(index));
    } else {
      setAnimationClassName(getInitialAnimationClassname(index));
    }
  }, [isInView, index]);

  return (
    <li
      suppressHydrationWarning={true}
      className={`reveal-card card ${animationClassName}`}
      style={style}
      id={index === 0 ? "one" : index === 1 ? "two" : "three"}
    >
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
      </div>
    </li>
  );
};

const getInitialAnimationClassname = (index: number) => {
  switch (index) {
    case 0:
      return "initialAnimationOne";
    case 1:
      return "initialAnimationTwo";
    case 2:
      return "initialAnimationThree";
    default:
      return "";
  }
};

const getAnimationClassname = (index: number) => {
  switch (index) {
    case 0:
      return "animationOne";
    case 1:
      return "animationTwo";
    case 2:
      return "animationThree";
    default:
      return "";
  }
};
