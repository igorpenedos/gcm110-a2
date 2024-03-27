import React from "react";
import { Button } from "../../components/Button/Button";

export default function IntroPress() {
  return (
    <div className="mx-96 mt-8">
      <div className="relative flex flex-row gap-8 items-center">
        <div className="flex h-48 w-2 ml-4 my-2 bg-tertiary"></div>
        <h1 className="text-6xl font-bold">
          The Introduction of The <br />
          <span className="text-tertiary">Printing Press</span>
        </h1>
        <img
          src="assets/printing_press.webp"
          alt="printing press"
          className="absolute w-full h-full -z-10 object-cover brightness-50"
        />
      </div>
      <div className="flex w-full h-1 my-8 bg-tertiary"></div>
      <div className="text-xl">
        <div className="flex flex-row gap-12">
          <div className="flex flex-col gap-6">

          <h2 className="text-4xl text-tertiary font-bold">
            The Start
          </h2>
          <p>
            In the 1450s a new printing method was brewing that would modify
            global knowledge. The invention that came to make such a drastic
            revolution was movable-type printing and its inventor was Johannes
            Gutenberg. The printing press catalyzed an enormous increase in
            knowledge production (Hippe, 2015). In comparison, the printing
            press can be thought of as the younger sibling of the Internet
            (Dittmar, 2011). They both had a massive contribution to the
            increase of global knowledge and modified social boundaries.
            <br />
            <br />
            The printing press was initially utilized to print the bible in 1456
            CE. The printing press soon after made its way into Italy and
            started to spread around Europe (Cartwright, 2024). The early
            printed books presented a lack of colours and designs and sometimes
            books would go through several editions with small mistakes, but
            this would not stop the revolution of the printing press
            (Cartwright, 2024).
          </p>
          </div>
          <img
            src="./assets/johannesGutenberg.webp"
            alt="johannes gutenberg"
            className="w-1/3 h-full ml-4 mb-4 border-4 border-tertiary"
          />
        </div>
        <div className="flex w-full h-1 my-8 bg-tertiary"></div>
        <div className="">
          {/* <img
            src="./assets/increase_printing.gif"
            alt="increase of printing all over Europe"
            className="w-1/2 border-4 border-tertiary float-left mt-4 mr-4"
          /> */}
          <div>
            <h2 className="mt-8 text-4xl text-tertiary font-bold">
              The Revolution Begins
            </h2>
            <br />
            <p>
              The world of knowledge got turned upside down as printing took
              over and spread. People all over the world could now come together
              with their knowledge and give their feedback to improve the global
              society. Printing material was able to improve aspects of society
              that are still present today even as the digital world is taking
              over.
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
