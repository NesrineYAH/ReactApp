import React from "react";
import Nav from "./components/nav/Nav";
import Header from "./components/Header/Header";
import { Routes, Route, HashRouter } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Footer from "./components/Footer/Footer";
import Error from "./pages/Error/Error";
import Form from "./components/Form/Form";
import Presentation from "./components/Presentation/presentation";

import "./App.scss";

const App = () => {
  return (
    <div className="App ">
      <main className="main">
        <Header />
        <HashRouter>
          <Nav></Nav>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </HashRouter>
        <presentation />
      </main>
      <Footer />
    </div>
  );
};

export default App;
