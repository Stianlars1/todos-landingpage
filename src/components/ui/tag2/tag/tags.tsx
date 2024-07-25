import { Priority } from "@/types/taskTypes";
import "./css/tags.css";

type TagsProps =
  | { priority: Priority; variant: "priority" }
  | { tags: string[]; variant: "tag" };
export const Tag2 = (props: TagsProps) => {
  if (props.variant === "priority") {
    const priorityString = props.priority.toLowerCase();
    return (
      <div className={`tag priority-${priorityString}`}>
        <span>{props.priority}</span>
      </div>
    );
  }
  return (
    <>
      {props.tags.map((tag) => (
        <div key={tag} className="tag default">
          <span>{tag}</span>
        </div>
      ))}
    </>
  );
};
