import React from "react";
import Banner from "../../components/Banner/Banner";
import Form from "../../components/Form/Form";
import { Routes, Route } from "react-router-dom";
import Presentation from "../../components/Presentation/presentation";
import Competance from "../../components/Competances/Competances";

const Home = () => {
  return (
    <div className="home">
      <Banner />
      <Presentation />

      <Form />

      <Routes>
        <Route path="/Competances" element={<Competance />} />
      </Routes>
    </div>
  );
};

export default Home;
