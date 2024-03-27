import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

interface Props {
  text: string;
  to: string;
  bg?: string;
  textColor?: string;
}

export const Button = (props: Props) => {
  const { text, to, bg, textColor } = props;
  return (
    <Link
      className={`bg-${bg ? bg : "tertiary"} text-${
        textColor ? textColor : "primary"
      } rounded-full px-4 py-1 drop-shadow-button font-semibold hover:text-secondary transition-all duration-500 flex flex-row w-fit items-center gap-2`}
      to={to}
    >
      {text}
      <FaArrowRight />
    </Link>
  );
};
