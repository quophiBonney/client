import React from "react";
import Banner from "./Banner";
import Discover from "./Discover";
import Flow from "./Flow";
import Bill from "./Bill";
import Assurance from "./Assurance";
import Review from "./Review";
const Home = () => {
  return (
    <div>
      <Banner />
      <Review />
      <Bill />
      <Flow />
      <Discover />
      <Assurance />
    </div>
  );
};

export default Home;
