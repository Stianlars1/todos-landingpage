"use client";
import { useState } from "react";
import styles from "./css/faqAccordion.module.css"; // Create this file for styling

export const FAQAccordion = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const faqs = [
    {
      question: "What is TaskBuddy?",
      answer:
        "TaskBuddy is a task management app designed to help users streamline their workflow, boost productivity, and achieve their goals with features like customizable dashboards, drag-and-drop functionality, and real-time updates.",
    },
    {
      question: "How do I create a dashboard?",
      answer:
        'Creating a dashboard in TaskBuddy is simple. There are two ways to do this: from the sidebar menu, click the dashboards icon (the first item), then click "Create Dashboard." Or you can use the keyboard shortcuts: either CMD + D (Mac) or Ctrl + D (Windows). You can then customize the layout and filters to suit your workflow and project needs.',
    },
    {
      question: "Can I switch between devices?",
      answer:
        "Yes! TaskBuddy is designed for a seamless multidevice experience, so you can manage tasks efficiently on both desktop and mobile devices.",
    },
    {
      question: "How does TaskBuddy help me track deadlines?",
      answer:
        'TaskBuddy offers features like the "Today" tab, which shows all tasks due today, and the Overview tab, which helps track upcoming deadlines and overdue tasks.',
    },
    {
      question: "Is my data secure with TaskBuddy?",
      answer:
        "Yes, TaskBuddy places privacy first. Your data is secure, and we prioritize keeping your information protected and private.",
    },
    {
      question: "How do I manage task sorting?",
      answer:
        "TaskBuddy allows both manual and automatic task sorting. You can choose to sort tasks manually or automatically by update time, either in ascending or descending order.",
    },
    {
      question: "Can I collaborate with a team using TaskBuddy?",
      answer:
        "Currently, TaskBuddy focuses on personal task management, but we are working on expanding team collaboration features. Stay tuned for future updates!",
    },
    {
      question: "Is TaskBuddy free?",
      answer:
        "Yes, TaskBuddy is a free and open-source task management system for everyone to use.",
    },
  ];

  return (
    <section className={styles.faqSection}>
      {faqs.map((faq, index) => (
        <div key={index} className={styles.accordionItem}>
          <button
            className={styles.accordionButton}
            onClick={() => toggleAccordion(index)}
          >
            {faq.question}
            <span className={styles.arrow}>
              {activeIndex === index ? "-" : "+"}
            </span>
          </button>
          {activeIndex === index && (
            <div className={styles.accordionContent}>
              <p>{faq.answer}</p>
            </div>
          )}
        </div>
      ))}
    </section>
  );
};
