"use client";
import { Reveal } from "@/components/ui/reveal/reveal";
import { TaskCard } from "@/components/ui/taskCard/taskCard";
import { demoMockTasksArray } from "@/playground/demos/demoContent";
import { Priority } from "@/types/taskTypes";
import { Libre_Franklin } from "next/font/google";
import { useRef, useState } from "react";
import styles from "./css/cardStack.module.css";
const libre = Libre_Franklin({ subsets: ["latin"] });

export const CardStack = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const animationScope = useRef<HTMLUListElement>(null);

  const [showCards, setShowCards] = useState(false);

  return (
    <>
      <Reveal
        reset
        type="opacity"
        duration={1}
        threshold={0.25}
        margin="50px 0px 100px 0px"
        width="100%"
        onRevealed={() => setShowCards(true)}
        onReset={() => setShowCards(false)}
      >
        <div ref={containerRef} className={styles.cardStack}>
          <header className={styles.header}>
            <h2
              className={`${libre.className} ${
                showCards ? styles.inView : styles.notInView
              } ${styles.h2}`}
            >
              Beautifully Designed
            </h2>
          </header>

          <ul ref={animationScope} className={styles.cardsContainer}>
            {demoMockTasksArray
              .slice(0, 3)

              .map((todo, index) => {
                return (
                  <TaskCard
                    index={index}
                    key={todo.todoId}
                    title={todo.title}
                    description={todo.description || ""}
                    tags={todo.tags}
                    priority={todo.priority || Priority.MEDIUM}
                    style={{ zIndex: 3 - index }}
                    isInView={showCards}
                  />
                );
              })}
          </ul>
        </div>
      </Reveal>
    </>
  );
};
