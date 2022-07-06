import React from "react";
import heroimg from "../img/hero.png";

function Hero() {
  return (
    <section className="hero">
      <img className="hero-photo" src={heroimg} />
      <h1 className="hero-header"> Online Experiences</h1>
      <p className="hero-text">
        Join unique interactive activities led by one-of-a-kind hosts--all
        without leaving home.
      </p>
    </section>
  );
}

export default Hero;
