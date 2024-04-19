"use client";
import { iconSize } from "@/utils/constants";
import { Button } from "@stianlarsen/react-ui-kit";
import { IoCloseOutline } from "react-icons/io5";
import { handleCloseNav } from "../../utils";

export const CloseButton = () => {
  return (
    <Button variant="icon" className={"close-button"} onClick={handleCloseNav}>
      <IoCloseOutline size={iconSize} />
    </Button>
  );
};
