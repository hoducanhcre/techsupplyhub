import React from "react";
import "./HomePage.css";

const Banners = () => {
  return (
    <section className="banners">
        <div className="banners__container">
          <div className="banner__box">
            <img src={require("../../assets/imgs/home-11-banner-2.jpg")} alt="EZ-77 PC" />
            <div className="banner__content">
              <h4>EZ-77 PC Worldwide</h4>
              <p>MF841HN/A 13"</p>
              <p className="banners__des-price">Starting at</p>
              <p className="banners__price">$1750</p>
            </div>
          </div>
          <div className="banner__box">
            <img src={require("../../assets/imgs/home-11-banner-1.jpg")} alt="Camera" />
            <div className="banner__content">
              <h4>Limited Weekly Discount</h4>
              <p className="banners__des-price">Discount -30%</p>
              <p className="banners__price">$349</p>
            </div>
          </div>
        </div>
      </section>
  )
}
export default Banners;