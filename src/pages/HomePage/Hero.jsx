import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <Carousel
        autoPlay
        infiniteLoop
        showThumbs={false}
        showStatus={false}
        showArrows={true}
        interval={4000}
      >
        <div className="hero__slide">
          <img src={require("../../assets/imgs/hero__slide--1.png")} alt="Gaming Headphones" />
          <div className="hero__text">
            <h2>Pro Gaming Headphones</h2>
            <p>VATIA CC24/KX Series</p>
            <a href="#!" className="btn-primary">Shop Now</a>
          </div>
        </div>

        <div className="hero__slide">
          <img src={require("../../assets/imgs/hero__slide--1.png")} alt="Gaming Keyboard" />
          <div className="hero__text">
            <h2>RGB Mechanical Keyboard</h2>
            <p>Latest Model for Pro Gamers</p>
            <a href="#!" className="btn-primary">Shop Now</a>
          </div>
        </div>

        <div className="hero__slide">
          <img src={require("../../assets/imgs/hero__slide--1.png")} alt="Gaming Mouse" />
          <div className="hero__text">
            <h2>Precision Gaming Mouse</h2>
            <p>Ultra-responsive for Fast Play</p>
            <a href="#!" className="btn-primary">Shop Now</a>
          </div>
        </div>
      </Carousel>
    </section>
  );
}
export default Hero;
