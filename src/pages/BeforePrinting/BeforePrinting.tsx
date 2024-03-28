import React from "react";
import { Button } from "../../components/Button/Button";

export default function BeforePrinting() {
  return (
    <div className="mt-32">
      <div className="mx-96 flex flex-row items-center">
        <div className="flex flex-col text-6xl text-tertiary font-bold w-1/2">
          <h1 className=" h-fit">Information</h1>
          <h1 className=" h-fit">Before</h1>
          <h1 className=" h-fit">Printing</h1>
          <div className="text-xl text-secondary font-semibold mt-2">
            Understanding how people accessed information
          </div>
        </div>
        <div className="w-1/2 relative">
          <img
            src={`${process.env.PUBLIC_URL}/assets/monk.webp`}
            alt="monk writing a scripture"
            className="w-full border-4 border-tertiary"
          />
          <div className="absolute text-tertiary right-2 top-2 font-bold">(Unknown, 2018)</div>
        </div>
      </div>
      <div className="px-96 pt-16 pb-8 mt-16 text-lg font-semibold bg-tertiary text-primary">
        <div className="float-left mb-4">
          <img
            src={`${process.env.PUBLIC_URL}/assets/communication.jpg`}
            alt="people communicating in the 1400s"
            className="w-96 h-full border-4 border-primary mr-4"
          />
          <div>(HistoryExtra, 2023)</div>
        </div>
        <p>
          Before the printing press's creation, the average person lived
          isolated lives with limited travel and therefore had to rely on word
          of mouth for information on most matters. The common person did not
          have access to written documents as they were rare and expensive. What
          drove even more separation was no one could read or write and most
          books were additionally written in Latin which did not help since
          scholars were the only ones who would learn Latin (Kabir, 2024). All
          barriers involved with access to written information reinforced the
          need for people to rely on priests for religious texts and word of
          mouth for other information. Word of mouth presented a concern as
          information could be lost when passed down. This was until the
          printing press was invented and changed the world.
        </p>
        <div className="mt-16">
          <Button
            text="Printing Press is Born"
            to="/introPress"
            bg="primary"
            textColor="secondary"
          />
        </div>
      </div>
    </div>
  );
}
