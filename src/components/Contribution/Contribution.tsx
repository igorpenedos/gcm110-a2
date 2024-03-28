import React from "react";

interface Props {
  title: string;
  text: string;
  isEven: boolean;
  imageName: string;
}

export const Contribution = (props: Props) => {
  const { title, text, isEven, imageName } = props;
  return (
    <>
      <img
        src={`${process.env.PUBLIC_URL}/assets/${imageName}`}
        alt={title}
        className={`flex border-4 my-4 w-1/3 h-auto object-cover rounded ${
          isEven
            ? "border-primary ml-12 rotate-6"
            : "border-secondary mr-12 -rotate-6"
        }`}
      />
      <div>
        <h2 className="text-3xl text-tertiary font-bold">{title}</h2>
        <p className="text-lg mt-6">{text}</p>
      </div>
    </>
  );
};
