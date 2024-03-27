import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="relative py-4 bg-tertiary text-primary font-semibold w-98">
      <div className="absolute ml-10 -my-3">
        <div>GCM 110: A2</div>
        <div>Igor Goncalves Penedos</div>
      </div>
      <ul className="flex flex-row justify-center gap-8">
        <li className="hover:underline">
          <Link to="/">Home</Link>
        </li>
        <li className="hover:underline">
          <Link to="/beforePrinting">Information Before Printing</Link>
        </li>
        <li className="hover:underline">
          <Link to="/introPress">The Introduction of The Printing Press</Link>
        </li>
        <li className="hover:underline">
          <Link to="/contributions">Contributions to the Global Knowledge</Link>
        </li>
        <li className="hover:underline">
          <Link to="/references">References</Link>
        </li>
      </ul>
    </nav>
  );
};
