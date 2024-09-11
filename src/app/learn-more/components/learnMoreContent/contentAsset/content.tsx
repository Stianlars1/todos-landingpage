"use client";
import { LearnMoreDragHandle } from "../../../../../../public/images/learn-more/learnMoreDragHandle";
import { LearnMoreShowAll } from "../../../../../../public/images/learn-more/learnMoreShowAll";
import {
  LearnMoreContentDashboardSwitch,
  LearnMoreContentFiltering,
  LearnMoreDeadlinesTracking,
  LearnMoreSummary,
  LearnMoreTaskClick,
  LearnMoreTaskViewer,
  LearnMoreUpcoming,
} from "./contentComponents";

interface LearnMoreContentDashboardType {
  title: string;
  description: string;
  Illustration?: any;
}
export const LEARN_MORE_CONTENT_DASHBOARD = [
  {
    title: "Switch Dashboards with Ease",
    description:
      "Quickly switch between dashboards to manage projects seamlessly.",
    Illustration: () => <LearnMoreContentDashboardSwitch />,
  },
  {
    title: "Customizable Task Views",
    description:
      "Filter tasks and customize your dashboard with a single click..",
    Illustration: () => <LearnMoreContentFiltering />,
  },
  {
    title: "Drag & Drop sorted manual or Sorted Lists",
    description:
      "Easily organize tasks by dragging, dropping, or sorting them.",
    Illustration: (className?: string) => (
      <LearnMoreDragHandle className={className} />
    ),
  },
  {
    title: "Efficient Task Limitation",
    description:
      "Limit visible tasks per column for a clean, focused workspace.",
    Illustration: () => <LearnMoreShowAll />,
  },
] as LearnMoreContentDashboardType[];

export const LEARN_MORE_CONTENT_TASKVIEWER = [
  {
    title: "Quick Task Access & Streamlined Workflow",
    description:
      "Open tasks anywhere and instantly edit all details in one place.",
    Illustration: (className?: string) => (
      <LearnMoreTaskClick className={className} />
    ),
  },
  {
    title: "Full Task Overview & Edit Capabilities",
    description:
      "View detailed task info and make real-time edits directly in the task viewer modal.",
    Illustration: (className?: string) => (
      <LearnMoreTaskViewer className={className} />
    ),
  },
] as LearnMoreContentDashboardType[];

export const LEARN_MORE_CONTENT_INSIGHTS = [
  {
    title: "Comprehensive Task Summaries",
    description:
      "Get a clear overview of tasks, including created, completed, and in-progress tasks.",
    Illustration: (className?: string) => (
      <LearnMoreSummary className={className} />
    ),
  },
  {
    title: "Deadline Tracking Made Easy",
    description:
      "Track all upcoming deadlines at a glance with intuitive tracking features.",
    Illustration: (className?: string) => (
      <LearnMoreDeadlinesTracking className={className} />
    ),
  },
  {
    title: "Stay Alert to Overdue Tasks",
    description:
      "Receive clear alerts for overdue tasks to keep you on top of deadlines.",
    Illustration: (className?: string) => (
      <LearnMoreUpcoming className={className} />
    ),
  },
] as LearnMoreContentDashboardType[];
