import React from "react";
import { useContext } from "react";
import { Context } from "../../main";
import { Navigate } from "react-router-dom";
import HeroSection from "./HeroSection";
import HowItWorks from "./HowItWorks";
import PopularCategories from "./PopularCategories";
import PopularCompanies from "./PopularCompanies";
import Event from "./Event";
import Banner from "./Banner";
import Navbar from "../Layout/Navbar";
import './home.css'
import HomeSection2 from "./HomeSection2";
import Teamanimal from "./Teamanimal";
import Blogs from "./Blogs";
import ProductSection from "./ProductSection";


const Home = () => {
  // const { isAuthorized } = useContext(Context);
  // if (!isAuthorized) {
  //   return <Navigate to={"/login"} />;
  // }
  return (
    <>
      <section className="homePage page">
        <Banner/>
        <HomeSection2/>
        <Blogs/>
      </section>
    </>
  );
};

export default Home;
