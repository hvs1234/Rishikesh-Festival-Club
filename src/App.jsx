// import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Activities from "./Pages/Activities/Activities";
import Nav from "./Components/Header/Nav";
import Footer from "./Components/Footer/Footer";
import ScrollToTop from "./Components/Btns/ScrollToTop";
import Founders from "./Pages/Founders/Founders";
import Events from "./Pages/Events/Events";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <div className="flex flex-col gap-[1rem]">
          <Nav />
          <div className="mt-[6rem]">
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/about" element={<About />}></Route>
              <Route path="/activities" element={<Activities />}></Route>
              <Route path="/founders" element={<Founders />}></Route>
              <Route path="/events" element={<Events />}></Route>
            </Routes>
          </div>
        </div>
        <Footer />
        <ScrollToTop />
      </BrowserRouter>
    </>
  );
};

export default App;
