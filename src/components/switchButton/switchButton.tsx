"use client";
import { useEffect, useState } from "react";
import styles from "./switchButton.module.css";

interface SwitchButtonProps {
  checked?: boolean;
  onToggle?: () => void;
  label?: string;
  size?: "xs" | "sm" | "md" | "lg"; // Adding size option
  className?: string;
}

export const SwitchButton = ({
  checked = false,
  onToggle = undefined,
  label,
  size = "md", // default size,
  className,
}: SwitchButtonProps) => {
  const [toggled, setToggled] = useState<boolean>(checked);

  useEffect(() => {
    setToggled(checked); // Synchronize the internal state with the checked prop
  }, [checked]);

  const handleToggle = () => {
    setToggled((prev) => !prev);
    onToggle && onToggle(); // Trigger the external handler
  };

  return (
    <label
      className={`${styles.switch} ${className ? className : ""} ${
        styles[size]
      }`}
    >
      {label && <span className={styles.label}>{label}</span>}
      <input
        type="checkbox"
        checked={toggled}
        onChange={handleToggle} // Handle changes with the toggle
        className={styles.input}
      />
      <span className={styles.slider}></span>
    </label>
  );
};
