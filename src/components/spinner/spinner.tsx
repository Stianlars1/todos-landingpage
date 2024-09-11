import styles from "./css/spinner.module.css";

export const Spinner = ({ className = "" }: { className?: string }) => {
  return (
    <>
      <div className={`${className} ${styles.spinner}`} />
    </>
  );
};
