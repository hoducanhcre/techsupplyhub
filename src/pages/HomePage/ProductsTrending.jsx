import React from "react";
import "./HomePage.css";

const ProductsTrending = () => {
  return (
    <section className="products products--trending">
        <div className="container__homepage">
          <h2>Trending Products</h2>
          <div className="products__grid">
            <div className="products__card">
              <span className="products__badge">Premium Laptops</span>
              <div className="products__actions">
                <a href="#!" className="products__like">
                  <img src={require("../../assets/imgs/icons/products/heart-wishlist.svg").default} alt="Wishlist Icon" />
                </a>
                <a href="#!" className="products__compare">
                  <img src={require("../../assets/imgs/icons/products/arrow-compare.svg").default} alt="Compare Icon" />
                </a>
              </div>
              <img src={require("../../assets/imgs/trending-products/shop-img-107.png")} alt="Keyboard" />
              <h3>RGB Double-Shot PBT Quick Mechanical Keyboard</h3>
              <p className="products__price">$390</p>
            </div>
            <div className="products__card">
              <span className="products__badge">Premium Laptops</span>
              <div className="products__actions">
                <a href="#!" className="products__like">
                  <img src={require("../../assets/imgs/icons/products/heart-wishlist.svg").default} alt="Wishlist Icon" />
                </a>
                <a href="#!" className="products__compare">
                  <img src={require("../../assets/imgs/icons/products/arrow-compare.svg").default} alt="Compare Icon" />
                </a>
              </div>
              <img src={require("../../assets/imgs/trending-products/shop-img-109.png")} alt="Headphone" />
              <h3>Gaming Headphones Over-Ear FX-9999</h3>
              <p className="products__price">$810</p>
            </div>
            <div className="products__card">
              <span className="products__badge">Premium Laptops</span>
              <div className="products__actions">
                <a href="#!" className="products__like">
                  <img src={require("../../assets/imgs/icons/products/heart-wishlist.svg").default} alt="Wishlist Icon" />
                </a>
                <a href="#!" className="products__compare">
                  <img src={require("../../assets/imgs/icons/products/arrow-compare.svg").default} alt="Compare Icon" />
                </a>
              </div>
              <img src={require("../../assets/imgs/trending-products/shop-img-110.png")} alt="Keyboard" />
              <h3>RGB Double-Shot PBT Quick Mechanical Keyboard</h3>
              <p className="products__price">$390</p>
            </div>
            <div className="products__card">
              <span className="products__badge">Premium Laptops</span>
              <div className="products__actions">
                <a href="#!" className="products__like">
                  <img src={require("../../assets/imgs/icons/products/heart-wishlist.svg").default} alt="Wishlist Icon" />
                </a>
                <a href="#!" className="products__compare">
                  <img src={require("../../assets/imgs/icons/products/arrow-compare.svg").default} alt="Compare Icon" />
                </a>
              </div>
              <img src={require("../../assets/imgs/trending-products/shop-img-96.png")} alt="Headphone" />
              <h3>Gaming Headphones Over-Ear FX-9999</h3>
              <p className="products__price">$810</p>
            </div>
            <div className="products__card">
              <span className="products__badge">Premium Laptops</span>
              <div className="products__actions">
                <a href="#!" className="products__like">
                  <img src={require("../../assets/imgs/icons/products/heart-wishlist.svg").default} alt="Wishlist Icon" />
                </a>
                <a href="#!" className="products__compare">
                  <img src={require("../../assets/imgs/icons/products/arrow-compare.svg").default} alt="Compare Icon" />
                </a>
              </div>
              <img src={require("../../assets/imgs/trending-products/shop-img-99.png")} alt="Keyboard" />
              <h3>RGB Double-Shot PBT Quick Mechanical Keyboard</h3>
              <p className="products__price">$390</p>
            </div>
          </div>
        </div>
      </section>
  )
}
export default ProductsTrending;