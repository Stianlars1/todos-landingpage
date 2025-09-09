import { SUB_URL } from "@/utils/constants";

export const metadata: Metadata = {
  title: "Effortless Task Management with TaskBuddy",
  description:
    "TaskBuddy helps streamline your workflow with powerful task management tools. Create, organize, and complete tasks effortlessly.",
  keywords: [
    "todo",
    "create todo",
    "daily tasks",
    "todo list",
    "todo app",
    "todo buddy",
    "task buddy",
    "tasks",
    "create tasks online",
    "online task",
    "TaskBuddy",
    "task management",
    "productivity",
    "dashboards",
    "task tracking",
  ],

  creator: "Stian Larsen",
  publisher: "Stian Larsen",
  metadataBase: new URL(SUB_URL),

  openGraph: {
    type: "website",
    url: SUB_URL,
    title: "Effortless Task Management with TaskBuddy",
    description:
      "Boost your productivity with TaskBuddy - the ultimate task management app.",
    siteName: "TaskBuddy",

    images: [
      {
        url: `${SUB_URL}/android-chrome-512x512.png`,
        width: 512,
        height: 512,
        alt: "TaskBuddy logo",
      },
      {
        url: `${SUB_URL}/android-chrome-192x192.png`,
        width: 192,
        height: 192,
        alt: "TaskBuddy logo",
      },
    ],
  },
  twitter: {
    card: "app",
    title: "TaskBuddy.dev",
    description:
      "This is the landing page for taskbuddy, an online web tool for creating and structuring your daily tasks.",
    siteId: "882276408",
    creator: "@Litehode",
    creatorId: "882276408",
    images: {
      url: `${SUB_URL}/android-chrome-512x512.png`,
      alt: "TaskBuddy logo",
    },
    app: {
      name: "twitter_app",
      id: {
        iphone: "twitter_app://iphone",
        ipad: "twitter_app://ipad",
        googleplay: "twitter_app://googleplay",
      },
      url: {
        iphone: "https://iphone_url",
        ipad: "https://ipad_url",
      },
    },
  },

  icons: {
    icon: [{ rel: "icon", url: "/favicon.ico" }],
    apple: [{ rel: "apple", url: "/apple-touch-icon.png" }],
  },

  verification: {
    google: "google",
    yandex: "yandex",
    yahoo: "yahoo",
    other: {
      me: ["stian.larsen@mac.com"],
    },
  },
};
