import React from "react";
import Banner from "../../components/Banner/Banner";
import Form from "../../components/Form/Form";
//import Card from "../../components/Card/Card";
import Presentation from "../../components/Presentation/presentation";

const Home = () => {
  return (
    <div className="home">
      <Banner />
      <Presentation />
      <Form />
    </div>
  );
};

export default Home;
