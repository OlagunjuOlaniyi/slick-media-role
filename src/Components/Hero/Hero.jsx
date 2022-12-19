import React from "react";
import HeroImage from "../assets/hero.png";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero">
      {/* <img src={HeroImage} alt="" /> */}
      <div className="hero__container">
        <h1 className="hero__text">Watch something incredible.</h1>
      </div>
    </div>
  );
};

export default Hero;
