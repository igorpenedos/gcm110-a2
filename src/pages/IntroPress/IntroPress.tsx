import React from "react";
import { Button } from "../../components/Button/Button";

export default function IntroPress() {
  return (
    <div className="mx-96 mt-8">
      <div className="relative flex flex-row gap-8 items-center">
        <div className="absolute right-1 bottom-1">(Kabir, 2024)</div>
        <div className="flex h-48 w-2 ml-4 my-2 bg-tertiary"></div>
        <h1 className="text-6xl font-bold">
          The Introduction of The <br />
          <span className="text-tertiary">Printing Press</span>
        </h1>
        <img
          src={`${process.env.PUBLIC_URL}/assets/printing_press.webp`}
          alt="printing press"
          className="absolute w-full h-full -z-10 object-cover brightness-50"
        />
      </div>
      <div className="flex w-full h-1 my-8 bg-tertiary"></div>
      <div className="text-xl">
        <div className="flex flex-row gap-12">
          <div className="flex flex-col gap-6 w-2/3">
            <h2 className="text-4xl text-tertiary font-bold">The Start</h2>
            <p>
              In the 1450s a new printing method was brewing that would modify
              global knowledge. The invention that came to make such a drastic
              revolution was movable-type printing and its inventor was Johannes
              Gutenberg. The printing press was initially utilized to print the
              bible in 1456 CE. The printing press soon after entered Italy and
              started to spread around Europe. Its printing capabilities were
              endless and soon all matters of text started to be produced
              ranging from pamphlets to romantic novels (Cartwright, 2024).
              <br />
              <br />
              The printing press catalyzed an enormous increase in knowledge
              production (Hippe, 2015). In comparison, the printing press can be
              thought of as the younger sibling of the Internet (Dittmar, 2011).
              They both had a massive contribution to the increase of global
              knowledge and modified social boundaries.
            </p>
          </div>
          <div className="flex flex-col w-1/3">
            <img
              src={`${process.env.PUBLIC_URL}/assets/johannesGutenberg.webp`}
              alt="johannes gutenberg"
              className="w-full mb-1 border-4 border-tertiary"
            />
            <div>(Mark, 2023)</div>
          </div>
        </div>
        <div className="flex w-full h-1 my-8 bg-tertiary"></div>
        <div className="">
          <div>
            <h2 className="mt-8 text-4xl text-tertiary font-bold">
              The Revolution Begins
            </h2>
            <br />
            <p>
              The world of knowledge got turned upside down as printing took
              over and spread. People worldwide could now come together with
              their knowledge. Cities that adopted the printing press flourished
              with positive spillovers that made cities culturally dynamic,
              captivated immigration and demanded a return to labour (Dittmar,
              2011). Even as the digital medium rises, the impact of printing is
              undeniably key in the evolution of information.
            </p>
            <div className="mt-8">
              <Button
                text="Contributions to Global Knowledge"
                to="/contributions"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
