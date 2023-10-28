
import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutPage from "./pages/About/index";
import LandingPage from "pages/LandingPage";
import OrchestraPage from "pages/Orchestra";
import LineagePage from "pages/Lineage";
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/generations" element={<LineagePage />} />
          <Route path="/orchestra" element={<OrchestraPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
