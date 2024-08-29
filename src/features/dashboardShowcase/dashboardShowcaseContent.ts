export interface DashboardFeatureCard {
  id: number;
  title: string;
  description: string;
  illustration?: string;
  imageUrl: string;
  imageUrlDark?: string;
}

export const dashboardFeatureCards: DashboardFeatureCard[] = [
  {
    id: 0,
    title: "Create dashboards",
    description:
      "Create spaces for work, projects, or hobbies. TaskBuddy’s dashboards keep you organized.",
    imageUrl: "/images/dashboardShowcase/create_dashboards_stacked.svg",
  },
  {
    id: 1,
    title: "Advanced task searching",
    description:
      "Customize each dashboard with specific layouts, colors, and filters to match your unique workflow and preferences.",
    imageUrl: "/images/search/search_light.svg",
    imageUrlDark: "/images/search/search_dark.svg",
  },
  {
    id: 2,
    title: "Powerful keyboard shortcuts",
    description:
      "Enhance your workflow with intuitive keyboard shortcuts, making task management faster and more seamless.",
    imageUrl: "/images/keyboard/keyboard_light.svg",
    imageUrlDark: "/images/keyboard/keyboard_dark.svg",
  },

  {
    id: 3,
    title: "Task Viewer",
    description:
      "Edit tasks in a sleek, responsive window. Update details and stay synced without leaving your view.",
    imageUrl: "/images/taskviewer/taskviewer_light.svg",
    imageUrlDark: "/images/taskviewer/taskviewer_dark.svg",
  },
];

export const SHORTCUTS = "Powerful keyboard shortcuts";
export const CREATE_DASHBOARDS = "Create dashboards";
export const SEARCH = "Advanced task searching";
