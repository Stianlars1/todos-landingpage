"use client";
import { LightBeam } from "@stianlarsen/react-light-beam";
import { Libre_Franklin } from "next/font/google";
import { useState } from "react";
import {
  LEARN_MORE_CONTENT_DASHBOARD,
  LEARN_MORE_CONTENT_INSIGHTS,
  LEARN_MORE_CONTENT_TASKVIEWER,
} from "./contentAsset/content";
import styles from "./css/learnMoreContent.module.css";
const libre = Libre_Franklin({ subsets: ["latin"] });

export const LearnMoreContent = () => {
  const [lightbeamLoaded, setLightbeamLoaded] = useState(false);
  return (
    <>
      <main className={styles.learnMoreContent} style={libre.style}>
        <LightBeam
          colorLightmode="hsl(var(--card))"
          className={`${styles.lightBeam} ${
            lightbeamLoaded ? styles.lightBeamLoaded : ""
          }`}
          maskLightByProgress
          onLoaded={() => setLightbeamLoaded(true)}
        />

        {/* Overview Section */}
        <section className={styles.section}>
          <h2 className={styles.heading2}>Unlock Your Potential</h2>
          <p className={styles.paragraph}>
            TaskBuddy is designed to streamline your workflow, bringing clarity
            and focus to your task management. Whether you&apos;re organizing
            personal projects or keeping track of deadlines, TaskBuddy adapts to
            your needs with seamless efficiency.
          </p>
        </section>

        {/* Dashboard Section */}
        <section className={styles.section}>
          <h2 className={styles.heading2}>
            Centralized Control with the Dashboard
          </h2>
          <p className={styles.paragraph}>
            The Dashboard is the heart of TaskBuddy, providing you with a clear
            and customizable overview of all your tasks. From switching
            dashboards to organizing tasks by status, the Dashboard gives you
            complete control over your workflow.
          </p>
          <ul className={styles.cardList}>
            {LEARN_MORE_CONTENT_DASHBOARD.map((item, index) => {
              const { title, description } = item;
              console.log(item.title.toLowerCase());
              return (
                <div key={item.title} className={styles.card}>
                  {item && "Illustration" in item && (
                    <figure
                      className={`${styles.cardFigure} ${
                        index === 2
                          ? styles.dragWrapper
                          : index === 3
                          ? `${styles.cardIllustration} ${styles.cardFader}`
                          : ""
                      }`}
                    >
                      {item.Illustration(
                        index === 2 ? styles.cardIllustration : ""
                      )}
                    </figure>
                  )}
                  <h3 className={styles.cardTitle}>{title}</h3>
                  <p className={styles.cardText}>{description}</p>
                </div>
              );
            })}
          </ul>
          <div className={styles.imageWrapper}>
            {/* <Image
              src="/mnt/data/taskbuddy2.png"
              alt="TaskBuddy Main Dashboard"
              className={styles.image}
              width={1200}
              height={600}
            /> */}
          </div>
        </section>

        {/* Task Viewer Section */}
        <section className={styles.section}>
          <h2 className={styles.heading2}>
            Task Viewer: Simplified Task Management
          </h2>
          <p className={styles.paragraph}>
            The Task Viewer is your go-to tool for managing individual tasks.
            With all the editing options in one place, it simplifies the process
            of updating, organizing, and completing tasks, helping you stay on
            top of your workload.
          </p>
          <ul className={styles.cardList}>
            {LEARN_MORE_CONTENT_TASKVIEWER.map((item, index) => (
              <>
                <div className={styles.card}>
                  <figure
                    className={`${styles.cardFigure} ${styles.cardIllustration} `}
                  >
                    {item.Illustration(styles.taskviewerSVG)}
                  </figure>
                  <h3 className={styles.cardTitle}>{item.title}</h3>
                  <p className={styles.cardText}>{item.description}</p>
                </div>
              </>
            ))}
          </ul>
          <div className={styles.imageWrapper}>
            {/* <Image
              src="/mnt/data/taskbuddy3.png"
              alt="TaskBuddy Task Viewer"
              className={styles.image}
              width={1200}
              height={600}
            /> */}
          </div>
        </section>

        {/* Overview Insights Section */}
        <section className={styles.section}>
          <h2 className={styles.heading2}>Overview: Insights at a Glance</h2>
          <p className={styles.paragraph}>
            The Overview tab offers a quick snapshot of your current projects
            and tasks, helping you stay informed and on track. With clear
            summaries and deadline tracking, you can see exactly where you
            stand.
          </p>
          <ul className={styles.cardList}>
            {LEARN_MORE_CONTENT_INSIGHTS.map((item, index) => (
              <>
                <div className={styles.card}>
                  <figure
                    className={`${styles.cardFigure} ${styles.cardIllustration} `}
                  >
                    {item?.Illustration(styles.taskviewerSVG)}
                  </figure>
                  <h3 className={styles.cardTitle}>{item.title}</h3>
                  <p className={styles.cardText}>{item.description}</p>
                </div>
              </>
            ))}
          </ul>
        </section>

        {/* Today’s Tasks Section */}
        <section className={styles.section}>
          <h2 className={styles.heading2}>Focus on Today</h2>
          <p className={styles.paragraph}>
            The &quot;Today&quot; tab helps you stay focused on what needs
            immediate attention. See all tasks due today in one place, and
            tackle your priorities with confidence.
          </p>
        </section>
      </main>
    </>
  );
};
