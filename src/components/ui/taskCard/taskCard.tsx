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
  className = "",
}: {
  title: string;
  description: string;
  tags: TagsType;
  priority: TodoPriority;
  style?: CSSProperties;
  isInView: boolean;
  index: number;
  className?: string;
}) => {
  const [hasMounted, setHasMounted] = useState(false);
  const [animationClassName, setAnimationClassName] = useState(
    getInitialAnimationClassname(index)
  );

  useEffect(() => {
    console.log("isInView", isInView);
    if (isInView) {
      setAnimationClassName(getAnimationClassname(index));
      setHasMounted(true);
    } else {
      if (hasMounted) {
        setTimeout(() => {
          console.log("exit animation");
          setAnimationClassName(getInitialAnimationClassname(index));
          setHasMounted(false);
        }, 1000);
      } else {
        setTimeout(() => {
          console.log("initial animation");
          setAnimationClassName(getInitialAnimationClassname(index));
          setHasMounted(false);
        }, 500);
      }
    }
  }, [isInView, index, hasMounted]);

  return (
    <li
      suppressHydrationWarning={true}
      className={`reveal-card card ${animationClassName} ${className}`}
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
export const SimpleTaskCard = ({
  title,
  description,
  tags,
  priority,
  style = undefined,
  index,
  className = "",
}: {
  title: string;
  description: string;
  tags: TagsType;
  priority: TodoPriority;
  style?: CSSProperties;
  index: number;
  className?: string;
}) => {
  return (
    <li
      suppressHydrationWarning={true}
      className={`reveal-card-simple simple-card ${className}`}
      style={style}
      id={index === 0 ? "one" : index === 1 ? "two" : "three"}
    >
      <div className="reveal-card-simple__wrapper">
        <div className="reveal-card-simple__wrapper__header">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
        <div className="reveal-card-simple__wrapper__badges">
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
