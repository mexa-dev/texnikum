import React from "react";
import { Route, Routes } from "react-router-dom";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Courses from "./components/Courses";
import Nesw from "./components/Nesw";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/news" element={<Nesw />} />
      </Routes>
    </>
  );
};

export default App;
