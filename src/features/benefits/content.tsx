import {
  BoostAnimation,
  FastAnimation,
  LockAnimation,
  PulseAnimation,
} from "@/components/lottie/lotties";

export interface Benefit {
  title: string;
  description: string;
  animated?: boolean;
  imgSrc?: string;
  animation?: ({
    widthHeight,
    className,
  }: {
    widthHeight?: number | undefined;
    className?: string;
  }) => React.ReactElement;
  bulletPoints?: string[];
}

export const benefitsContentList: Benefit[] = [
  {
    title: "Lightning Fast Performance",
    description:
      "Experience lightning-fast performance with TaskBuddy, ensuring you spend less time waiting and more time getting things done.",
    animated: true,
    animation: FastAnimation,
  },
  {
    title: "Boost Efficiency",
    description:
      "Optimize your workflow with streamlined task management features, reducing the time spent on organizing and updating tasks.",
    animated: true,
    animation: BoostAnimation,

    bulletPoints: [
      "Quick task creation",
      "Drag-and-drop",
      "Clickable tasks",
      "Real-time updates",
      "Custom dashboards",
      "Task tags",
    ],
  },

  {
    title: "Stay Organized",
    description:
      "Keep your tasks and deadlines in one place, ensuring you never miss an important task.",
    animated: false,
    // imgSrc: "calendarIcon", // Example asset
  },
  {
    title: "Seamless Multidevice Experience",
    description:
      "Enjoy a smooth and responsive interface across all devices, making it easy to manage tasks whether you’re on your desktop or mobile.",
    animated: false,
    // imgSrc: "devicesIcon", // Example asset
  },
  {
    title: "Gain Clear Insights",
    description:
      "Understand your progress and upcoming deadlines with summary overviews and detailed reports.",
    animated: true,
    animation: PulseAnimation,
    // imgSrc: "graphIcon", // Example asset
  },
  {
    title: "Privacy First",
    description:
      "Your data is secure with TaskBuddy. We prioritize your privacy and ensure your information is protected.",
    animated: true,
    animation: LockAnimation, // Example asset (replace with actual path)
  },
];
