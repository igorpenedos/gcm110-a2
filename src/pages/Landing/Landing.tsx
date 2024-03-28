import React from "react";
import { Button } from "../../components/Button/Button";

export default function Landing() {
  return (
    <div className="flex flex-col">
      <div className="relative flex justify-center text-center flex-col">
        <video
          className="object-cover h-[600px] brightness-50 saturate-50"
          autoPlay
          loop
          muted
        >
          <source
            src={`${process.env.PUBLIC_URL}/assets/landing_printing.mp4`}
            type="video/mp4"
          />
        </video>
        <div className="absolute flex flex-col w-full text-tertiary font-bold drop-shadow-xl">
          <h1 className="text-9xl w-fit ml-auto mr-auto p-2 rounded">
            Printing is Power
          </h1>
          <h3 className="text-3xl w-fit mt-6 ml-auto mr-auto p-2 rounded font-semibold">
            With printing comes knowledge and with knowledge comes power
          </h3>
          <h6 className="w-fit mt-6 ml-auto mr-auto p-2 rounded font-semibold">
            By: Igor Goncalves Penedos | 500898291
          </h6>
        </div>
      </div>
      <div className="pt-6 xl:mx-96 mx-12 text-xl">
        <div>
          The printing press, invented by German printer Johannes Gutenberg, had
          a major impact on how information could be distributed and absorbed.
          The invention transformed global knowledge and how humans would treat
          and share information. The process of printing introduced many new
          concepts to society and opened up many opportunities and jobs. I
          welcome you to explore how information went from the elites to
          everyone.
        </div>
        <div className="mt-6">
          <Button text="Information Before Printing" to="/beforePrinting" />
        </div>
      </div>
    </div>
  );
}
