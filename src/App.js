import React from "react";
import Header from "./components/Header/Header";
import { Routes, Route, HashRouter } from "react-router-dom";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer/Footer";
import Error from "./pages/PageError/PageError";
import Competance from "./components/Competances/Competances";

import "./App.scss";

const App = () => {
  return (
    <div className="App ">
      <Header />
      <HashRouter>
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="*" element={<Error />} />
          <Route path="/Competances" element={<Competance />} />
        </Routes>
      </HashRouter>

      <Footer />
    </div>
  );
};

export default App;
