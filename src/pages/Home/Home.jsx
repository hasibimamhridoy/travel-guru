import React from "react";
import Banner from "../../components/Header/Banner/Banner";
import './Home.css'
import { useLoaderData } from "react-router-dom";

const Home = () => {
 
  return (
    <div className="relative z-10 my-container  flex justify-center items-center ">
      <Banner></Banner>
    </div>
  );
};

export default Home;
