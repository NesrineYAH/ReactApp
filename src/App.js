import React from "react";
import Header from "./components/Header/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer/Footer";
import Error from "./pages/PageError/PageError";
import Competance from "./components/Competances/Competances";
import { useLocation } from "react-router-dom";

import "./App.scss";

const App = () => {
  const location = useLocation();
  const handleClick = () => {
    console.log(location);
  };

  return (
    <div className="App ">
      <BrowserRouter>
        <Header handleClick={this.handleClick} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Error />} />
          <Route path="/Competances" element={<Competance />} />
        </Routes>
      </BrowserRouter>
      <div>
        <div className="my-class">Some content</div>
      </div>
      <Footer />
    </div>
  );
};

export default App;
