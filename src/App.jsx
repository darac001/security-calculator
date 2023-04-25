import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/shared/Layout";
import VoltageDrop from "./components/VoltageDrop";
import Battery from "./components/Battery";
import WireSize from "./components/WireSize";



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<VoltageDrop />} />
          <Route path="battery" element={<Battery />} />
          <Route path="wire" element={<WireSize />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;