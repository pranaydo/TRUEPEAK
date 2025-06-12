import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import viteLogo from "/vite.svg";
import "./App.css";
import HomeLayout from "./HomeLayout";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Router>
        {/* <Headers /> */}
        <Routes>
          <Route path="/" element={<HomeLayout />} />
          <Route path="/aa" element={<Header />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
