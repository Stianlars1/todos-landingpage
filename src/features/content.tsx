import { DragDropIcon, IconDashboard, IconSortDesc } from "@/utils/icons";
import { IconType } from "react-icons";
import { MdDevices } from "react-icons/md";

export type FeaturesContentMapType = {
  feature: string;
  description: string;
  Icon: IconType;
  imageName: string;
};

export const FeaturesContentMap: FeaturesContentMapType[] = [
  {
    feature: "Customize Dashboards",
    description:
      "Personalize your task view with customizable dashboards that suit your workflow. Filter and display columns based on your task status preferences.",
    Icon: IconDashboard,
    imageName: "customDashboard.gif",
  },
  {
    feature: "Drag & Drop",
    description:
      "Effortlessly update task statuses and reorganize tasks within and across columns with intuitive drag and drop functionality.",
    Icon: DragDropIcon,
    imageName: "dragtasks.gif",
  },
  {
    feature: "Custom Sorting",
    description:
      "Choose between manual sorting of tasks and automatic sorting based on update time, with options for ascending or descending order.",
    Icon: IconSortDesc,
    imageName: "sortingTasks.gif",
  },
  {
    feature: "Responsive Layouts",
    description:
      "Switch between row-based and column-based layouts to optimize your view on different devices, ensuring a seamless experience on both large and small screens.",
    Icon: MdDevices,
    imageName: "columnLayout.gif",
  },
];
