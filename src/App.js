import React from "react";
import Nav from "./components/nav/Nav";
import Header from "./components/Header/Header";
import { Routes, Route, HashRouter } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Footer from "./components/Footer/Footer";
import Error from "./pages/Error/Error";
import Competance from "./components/Competances/Competances";

import "./App.scss";

const App = () => {
  return (
    <div className="App ">
      <Header />
      <HashRouter>
        <Nav></Nav>
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Error />} />
          <Route path="/Competances" element={<Competance />} />
        </Routes>
      </HashRouter>

      <Footer />
    </div>
  );
};

export default App;
