export const DragDropIcon = ({
  className = " ",
  id,
}: {
  className?: string;
  id?: string;
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 256 512"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      id={id}
    >
      <path
        fill="currentColor"
        d="M48 144a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm0 160a48 48 0 1 0 0-96 48 48 0 1 0 0 96zM96 416A48 48 0 1 0 0 416a48 48 0 1 0 96 0zM208 144a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm48 112a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM208 464a48 48 0 1 0 0-96 48 48 0 1 0 0 96z"
        data-v-870ae63a=""
      ></path>
    </svg>
  );
};
