// export interface DashboardFeatureCard {
//   id: number;
//   title: string;
//   description: string;
//   illustration?: string; // Optional field for illustration
//   imageUrl: string;
//   details?: string[]; // Optional field for additional details
// }

// export const dashboardFeatureCards: DashboardFeatureCard[] = [
//   {
//     id: 0,
//     title: "Create New Dashboards",
//     description:
//       "Create dedicated spaces for different aspects of your life. Whether it’s work, personal projects, or hobbies, TaskBuddy’s dashboards help you keep everything organized.",
//     illustration: "custom-dashboards-icon.png",
//     details: [
//       "<p>With TaskBuddy, you can create as many dashboards as you need. Customize each dashboard to focus on specific aspects of your life, from work to personal hobbies.</p>",
//       "<p>Choose unique names, colors, and layouts for each dashboard, allowing you to quickly differentiate between them and keep your tasks organized.</p>",
//       "<p>Dashboards can be easily rearranged and edited, giving you the flexibility to adapt as your projects evolve.</p>",
//     ],
//     imageUrl: "/images/dashboardShowcase/create_dashboards_stacked.svg",
//   },
//   {
//     id: 1,
//     title: "Organize Your Life",
//     description:
//       "Segment your tasks across different areas of your life. Whether it's work, home, or side projects, keep everything in its place with TaskBuddy.",
//     illustration: "organize-life-icon.png",
//     details: [
//       "<p>TaskBuddy helps you categorize tasks into different dashboards based on the various aspects of your life, making it easier to focus on what matters at the moment.</p>",
//       "<p>Whether you’re managing tasks at work, keeping track of home projects, or organizing a side hustle, TaskBuddy ensures that nothing falls through the cracks.</p>",
//       "<p>You can also move tasks between dashboards, so they’re always where they belong as priorities shift.</p>",
//     ],
//     imageUrl: "/images/dashboardShowcase/multiple.svg",
//   },

//   {
//     id: 2,
//     title: "Fast & Secure Task Management",
//     description:
//       "Experience lightning-fast performance and top-notch security with TaskBuddy.",
//     illustration: "fast-secure-icon.png",
//     details: [
//       "<p>TaskBuddy is optimized for speed, ensuring that your tasks load quickly and your workflow remains uninterrupted.</p>",
//       "<p>Your data is protected with industry-leading security protocols, so you can trust that your information is safe.</p>",
//       "<p>We use state-of-the-art encryption and secure cloud storage to keep your tasks and personal data secure at all times.</p>",
//     ],
//     imageUrl: "/images/dashboardShowcase/multiple.svg",
//   },
// ];
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
    illustration: "custom-dashboards-icon.png",
    imageUrl: "/images/dashboardShowcase/create_dashboards_stacked.svg",
  },
  {
    id: 1,
    title: "Advanced task searching",
    description:
      "Customize each dashboard with specific layouts, colors, and filters to match your unique workflow and preferences.",
    illustration: "organize-life-icon.png",
    imageUrl: "/images/search/search_light.svg",
    imageUrlDark: "/images/search/search_dark.svg",
  },
  {
    id: 2,
    title: "Powerful keyboard shortcuts",
    description:
      "Enhance your workflow with intuitive keyboard shortcuts, making task management faster and more seamless.",
    illustration: "fast-secure-icon.png",
    imageUrl: "/images/keyboard/keyboard_light.svg",
    imageUrlDark: "/images/keyboard/keyboard_dark.svg",
  },

  {
    id: 3,
    title: "Task Viewer",
    description:
      "Edit tasks in a sleek, responsive window. Update details and stay synced without leaving your view.",
    illustration: "fast-secure-icon.png",
    imageUrl: "/images/taskviewer/taskviewer_light.svg",
    imageUrlDark: "/images/taskviewer/taskviewer_dark.svg",
  },
];

export const SHORTCUTS = "Powerful keyboard shortcuts";
export const CREATE_DASHBOARDS = "Create dashboards";
export const SEARCH = "Advanced task searching";
