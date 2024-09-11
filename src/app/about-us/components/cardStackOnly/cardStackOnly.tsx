import { SimpleTaskCard } from "@/components/ui/taskCard/taskCard";
import { demoMockTasksArray } from "@/playground/demos/demoContent";
import { Priority } from "@/types/taskTypes";
import { CSSProperties } from "react";
import styles from "./css/cardStackOnly.module.css";
export const CardStackOnly = ({ className = "" }: { className?: string }) => {
  return (
    <>
      <div className={styles.cardStack}>
        <ul className={styles.cardsContainer}>
          <SimpleTaskCard
            index={0}
            key={demoMockTasksArray[0].todoId}
            title={demoMockTasksArray[0].title}
            description={demoMockTasksArray[0].description || ""}
            tags={demoMockTasksArray[0].tags}
            priority={demoMockTasksArray[0].priority || Priority.MEDIUM}
            style={
              {
                "--top": "0%",

                transform: `skewY(-4deg) rotateX(-14deg) rotateY(20deg) translateZ(-120px) translateX(3%) translateY(var(--top))`,
              } as CSSProperties
            }
            className={styles.cardStackOnlyRevealCard}
          />

          <SimpleTaskCard
            index={0}
            key={demoMockTasksArray[1].todoId}
            title={demoMockTasksArray[1].title}
            description={demoMockTasksArray[1].description || ""}
            tags={demoMockTasksArray[1].tags}
            priority={demoMockTasksArray[1].priority || Priority.MEDIUM}
            style={
              {
                "--top": "0%",

                transform:
                  "skewY(-4deg) rotateX(-14deg) rotateY(20deg) translateZ(0) translateX(0%) translateY(var(--top))",
              } as CSSProperties
            }
            className={styles.cardStackOnlyRevealCard}
          />
          <SimpleTaskCard
            index={0}
            key={demoMockTasksArray[2].todoId}
            title={demoMockTasksArray[2].title}
            description={demoMockTasksArray[2].description || ""}
            tags={demoMockTasksArray[2].tags}
            priority={demoMockTasksArray[2].priority || Priority.MEDIUM}
            style={
              {
                "--top": "0%",
                transform:
                  "skewY(-4deg) rotateX(-14deg) rotateY(20deg) translateZ(120px) translateX(-3%) translateY(var(--top))",
              } as CSSProperties
            }
            className={styles.cardStackOnlyRevealCard}
          />
        </ul>
      </div>
    </>
  );
};
