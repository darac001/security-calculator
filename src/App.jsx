import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/shared/Layout";
import VoltageDrop from "./components/VoltageDrop";



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<VoltageDrop />} />
          {/* <Route path="products" element={<Products />} /> */}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;