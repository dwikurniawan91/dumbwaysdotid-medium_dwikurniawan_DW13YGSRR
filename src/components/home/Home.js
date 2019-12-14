import React from "react";
import Category from "../category/Category";
import Content from "./Content";
import Navbar from "../navbar/Navbar";



const Home = () => {
  return (
    <div>
      <Navbar />
      <Category />
      <Content /> 
    </div>
  );
};
export default Home;