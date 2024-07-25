import { IconAdd, IconShuttle, IconToday, TaskBuddyIcon } from "@/utils/icons";
import { ReactElement } from "react";

export interface HowItWorksStepsType {
  title: string;
  description: string;
  image: string | undefined;

  icon: ReactElement;
}

export const howItWorksSteps: HowItWorksStepsType[] = [
  {
    title: "Create and Manage Tasks",
    description:
      "Easily create tasks, assign statuses, and manage them through your personalized dashboard.",
    image: undefined,
    icon: IconAdd({ className: undefined }),

    // image: "/gifs/how-it-works/create-task.png",
  },
  {
    title: "Track Progress and Achieve Goals",
    description:
      "Monitor your progress with real-time updates and achieve your goals efficiently.",
    image: undefined,
    icon: TaskBuddyIcon({ className: undefined }),

    // image: "/gifs/how-it-works/track-progress.png",
  },
  {
    title: "Summary Overview",
    description: "Get a short summarized overview of your tasks.",
    image: undefined,
    icon: IconShuttle({ className: undefined }),

    // image: "/gifs/how-it-works/track-progress.png",
  },
  {
    title: "Stay On Top of Deadlines",
    description:
      "Use the Today sidebar icon to quickly access tasks expiring today and update them accordingly.",
    image: undefined,
    icon: IconToday({ className: undefined }),

    // image: "/gifs/how-it-works/today-sidebar.png",
  },
];
