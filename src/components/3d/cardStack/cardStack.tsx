// "use client";
// import { TaskCard } from "@/components/ui/taskCard/taskCard";
// import { demoMockTasksArray } from "@/playground/demos/demoContent";
// import { Priority } from "@/types/taskTypes";
// import { useAnimate, useInView } from "framer-motion";
// import { Libre_Franklin } from "next/font/google";
// import { useEffect, useRef } from "react";
// import styles from "./css/cardStack.module.css";
// const libre = Libre_Franklin({ subsets: ["latin"] });

// // transform: `
// // translateX(${index * 50}px)
// // translateY(${-index * 80}px)
// // translateZ(${-index * 250}px)
// // rotateX(-10deg)
// // rotateY(-50deg)
// // `,
// const initialAnimationOne = {
//   opacity: 0,
//   willChange: "transform",
//   transform:
//     "translateX(200px) translateY(0px) translateZ(0px) rotateX(-10deg) rotateY(-50deg)",
// };
// const initialAnimationTwo = {
//   opacity: 0,
//   willChange: "transform",
//   transform:
//     "translateX(250px) translateY(-80px) translateZ(-250px) rotateX(-10deg) rotateY(-50deg)",
// };
// const initialAnimationThree = {
//   opacity: 0,
//   willChange: "transform",
//   transform:
//     "translateX(100px) translateY(-260px) translateZ(-500px) rotateX(-10deg) rotateY(-50deg)",
// };

// const animationOne = {
//   opacity: 1,
//   willChange: "transform",
//   transform:
//     "translateX(0px) translateY(0px) translateZ(0px) rotateX(-10deg) rotateY(-50deg)",
// };
// const animationTwo = {
//   opacity: 1,
//   willChange: "transform",
//   transform:
//     "translateX(50px) translateY(-80px) translateZ(-250px) rotateX(-10deg) rotateY(-50deg)",
// };
// const animationThree = {
//   opacity: 1,
//   willChange: "transform",
//   transform:
//     "translateX(100px) translateY(-160px) translateZ(-500px) rotateX(-10deg) rotateY(-50deg)",
// };

// export const CardStack = () => {
//   const containerRef = useRef<HTMLDivElement>(null);
//   const isInView = useInView(containerRef, {
//     once: false,
//     amount: 0.5,
//   });

//   const [animationScope, animate] = useAnimate();

//   const startAnimation = async () => {
//     animate("#one", animationOne, {
//       duration: 0.35,
//       delay: 0.2,
//       ease: "easeInOut",
//     });
//     animate("#two", animationTwo, {
//       duration: 0.35,
//       delay: 0.4,
//       ease: "easeInOut",
//     });
//     animate("#three", animationThree, {
//       duration: 0.35,
//       delay: 0.6,
//       ease: "easeInOut",
//     });

//     return;
//   };

//   useEffect(() => {
//     if (isInView && animationScope.current) {
//       console.log("Running animation");

//       startAnimation();
//     } else if (animationScope.current) {
//       console.log("Resetting animation");
//       animate("#one", initialAnimationOne, { repeat: 0 });
//       animate("#two", initialAnimationTwo, { repeat: 0 });
//       animate("#three", initialAnimationThree, {
//         repeat: 0,
//       });
//     }
//   }, [animationScope, isInView]);

//   return (
//     <>
//       <div ref={containerRef} className={styles.cardStack}>
//         <header className={styles.header}>
//           <h2 className={`${libre.className} ${styles.h2}`}>
//             Beautifully Designed{" "}
//           </h2>
//         </header>

//         <ul ref={animationScope} className={styles.cardsContainer}>
//           {demoMockTasksArray
//             .slice(0, 3)

//             .map((todo, index) => {
//               const style = {
//                 zIndex: 3 - index,
//                 // transform: `
//                 //   translateX(${index * 50}px)
//                 //   translateY(${-index * 80}px)
//                 //   translateZ(${-index * 250}px)
//                 //   rotateX(-10deg)
//                 //   rotateY(-50deg)
//                 // `,
//               };

//               return (
//                 <TaskCard
//                   index={index}
//                   key={todo.todoId}
//                   title={todo.title}
//                   description={todo.description || ""}
//                   tags={todo.tags}
//                   priority={todo.priority || Priority.MEDIUM}
//                   style={style}
//                   isInView={isInView}
//                 />
//               );
//             })}
//         </ul>
//       </div>
//     </>
//   );
// };
"use client";
import { Reveal } from "@/components/ui/reveal/reveal";
import { TaskCard } from "@/components/ui/taskCard/taskCard";
import { demoMockTasksArray } from "@/playground/demos/demoContent";
import { Priority } from "@/types/taskTypes";
import { useInView } from "framer-motion";
import { Libre_Franklin } from "next/font/google";
import { useEffect, useRef } from "react";
import styles from "./css/cardStack.module.css";
const libre = Libre_Franklin({ subsets: ["latin"] });

// transform: `
// translateX(${index * 50}px)
// translateY(${-index * 80}px)
// translateZ(${-index * 250}px)
// rotateX(-10deg)
// rotateY(-50deg)
// `,
const initialAnimationOne = {
  opacity: 0,
  willChange: "transform",
  transform:
    "translateX(200px) translateY(0px) translateZ(0px) rotateX(-10deg) rotateY(-50deg)",
};
const initialAnimationTwo = {
  opacity: 0,
  willChange: "transform",
  transform:
    "translateX(250px) translateY(-80px) translateZ(-250px) rotateX(-10deg) rotateY(-50deg)",
};
const initialAnimationThree = {
  opacity: 0,
  willChange: "transform",
  transform:
    "translateX(100px) translateY(-260px) translateZ(-500px) rotateX(-10deg) rotateY(-50deg)",
};

const animationOne = {
  opacity: 1,
  willChange: "transform",
  transform:
    "translateX(0px) translateY(0px) translateZ(0px) rotateX(-10deg) rotateY(-50deg)",
};
const animationTwo = {
  opacity: 1,
  willChange: "transform",
  transform:
    "translateX(50px) translateY(-80px) translateZ(-250px) rotateX(-10deg) rotateY(-50deg)",
};
const animationThree = {
  opacity: 1,
  willChange: "transform",
  transform:
    "translateX(100px) translateY(-160px) translateZ(-500px) rotateX(-10deg) rotateY(-50deg)",
};

export const CardStack = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const animationScope = useRef<HTMLUListElement>(null);
  const isInView = useInView(containerRef, {
    once: false,
    amount: 0.1,
    margin: "0px 0px 500px 0px",
  });

  useEffect(() => {
    if (isInView && animationScope.current) {
      console.log("Running animation");
    } else if (animationScope.current) {
      console.log("Resetting animation");
    }
  }, [animationScope, isInView]);

  return (
    <>
      <div ref={containerRef} className={styles.cardStack}>
        <header className={styles.header}>
          <Reveal reset delay={0.15} type="opacity" duration={1} width="100%">
            <h2
              className={`${libre.className} ${
                isInView ? styles.inView : styles.notInView
              } ${styles.h2}`}
            >
              Beautifully Designed
            </h2>
          </Reveal>
        </header>

        <ul ref={animationScope} className={styles.cardsContainer}>
          {demoMockTasksArray
            .slice(0, 3)

            .map((todo, index) => {
              const style = {
                zIndex: 3 - index,
                // transform: `
                //   translateX(${index * 50}px)
                //   translateY(${-index * 80}px)
                //   translateZ(${-index * 250}px)
                //   rotateX(-10deg)
                //   rotateY(-50deg)
                // `,
              };

              return (
                <TaskCard
                  index={index}
                  key={todo.todoId}
                  title={todo.title}
                  description={todo.description || ""}
                  tags={todo.tags}
                  priority={todo.priority || Priority.MEDIUM}
                  style={style}
                  isInView={isInView}
                />
              );
            })}
        </ul>
      </div>
    </>
  );
};
