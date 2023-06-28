import React from "react";
import Banner from "./Banner";
import Discover from "./Discover";
import Flow from "./Flow";
import Bill from "./Bill";
const Home = () => {
  return (
    <div>
      <Banner />
      <Bill />
      <Flow />
      <Discover />
    </div>
  );
};

export default Home;
