import React from "react";
import Navbar from "../navbar/Navbar";
import Category from "../category/Category";
import Content from "./Content";


const Home = () => {
  return (
    <div>
      {/* <Register /> */}
      {/* <Login /> */}
      <Navbar />
      <Category />
      <Content />
      
      
    </div>
  );
};
export default Home;