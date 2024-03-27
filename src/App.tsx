import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout/Layout";
import Landing from "./pages/Landing/Landing";
import BeforePrinting from "./pages/BeforePrinting/BeforePrinting";
import IntroPress from "./pages/IntroPress/IntroPress";
import Contributions from "./pages/Contributions/Contributions";
import References from "./pages/References/Reference";
import "./App.css";

function App() {
  return (
    // <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Landing />} />
          <Route path="/beforePrinting" element={<BeforePrinting />} />
          <Route path="/introPress" element={<IntroPress />} />
          <Route path="/contributions" element={<Contributions />} />
          <Route path="/references" element={<References />} />
        </Route>
      </Routes>
    // </BrowserRouter>
  );
}

export default App;
