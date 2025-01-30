// import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Activities from "./Pages/Activities/Activities";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/activities" element={<Activities />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
