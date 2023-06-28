import React from "react";
import Banner from "./Banner";
import Discover from "./Discover";
import Flow from "./Flow";
import Bill from "./Bill";
import Assurance from "./Assurance";
const Home = () => {
  return (
    <div>
      <Banner />
      <Flow />
      <Bill />
      <Assurance />
      <Discover />
    </div>
  );
};

export default Home;
