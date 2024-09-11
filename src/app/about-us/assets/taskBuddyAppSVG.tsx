"use client";
import { TaskBuddyLandingSVGDark } from "@/features/header/assets/taskBuddyLandingSVGDark";
import { TaskBuddyLandingSVGLight } from "@/features/header/assets/taskBuddyLandingSVGLight";
import { useIsDarkmodeActive } from "@/hooks/useIsDarkmode";
export const TaskBuddyAppSVG = ({ className = "" }: { className?: string }) => {
  const { isDarkmodeActive } = useIsDarkmodeActive();
  return (
    <>
      {isDarkmodeActive ? (
        <TaskBuddyLandingSVGDark className={`${className}`} style={undefined} />
      ) : (
        <TaskBuddyLandingSVGLight
          className={`${className}`}
          style={undefined}
        />
      )}
    </>
  );
};
