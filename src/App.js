import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Tokenomics from "./pages/tokenomics";
import Roadmap from "./pages/roadmap";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tokenomics" element={<Tokenomics />} />
        <Route path="/roadmap" element={<Roadmap />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;