import React from "react";
import "./HomePage.css";

const ProductBanners = () => {
  return (
    <section className="product-banners">
        <div className="product-banners__container">
          <div className="product-banners__box">
            <img src={require("../../assets/imgs/banners-2/home-11-banner-5.jpg")} alt="banner" />
            <div className="product-banners__content">
              <h4>Limited Weekly Discount</h4>
              <p className="product-banners__shop-now">SHOP NOW &nbsp; &gt;</p>
            </div>
          </div>
          <div className="product-banners__box">
            <img src={require("../../assets/imgs/banners-2/home-11-banner-4.jpg")} alt="banner" />
            <div className="product-banners__content">
              <h4>Photo Drones</h4>
              <p>MF841HN/A 13"</p>
              <p className="product-banners__discount">DISCOUNT -30%</p>
              <p className="product-banners__price">$75</p>
            </div>
          </div>
          <div className="product-banners__box">
            <img src={require("../../assets/imgs/banners-2/home-11-banner-3.jpg")} alt="banner" />
            <div className="product-banners__content">
              <h4>PC Parts &amp; Elements</h4>
              <p className="product-banners__shop-now">SHOP NOW &nbsp; &gt;</p>
            </div>
          </div>
        </div>
      </section>
  )
}
export default ProductBanners;