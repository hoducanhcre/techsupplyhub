import React from "react";
import "./HomePage.css";

const ProductsRecently = () => {
  return (
    <section className="products products--recent">
        <div className="container__homepage">
          <h2>Recently Added</h2>
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
              <img src={require("../../assets/imgs/recent-added/shop-img-111.png")} alt="Mouse" />
              <h3>Wireless PC Mouse XF-59</h3>
              <p className="products__price">$290</p>
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
              <img src={require("../../assets/imgs/recent-added/shop-img-113.png")} alt="CPU fan" />
              <h3>CPU Air Cooler P120 Fan Anodized Metal</h3>
              <p className="products__price">$155</p>
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
              <img src={require("../../assets/imgs/recent-added/shop-img-114.png")} alt="Mouse" />
              <h3>Wireless PC Mouse XF-59</h3>
              <p className="products__price">$290</p>
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
              <img src={require("../../assets/imgs/recent-added/shop-img-115.png")} alt="CPU fan" />
              <h3>CPU Air Cooler P120 Fan Anodized Metal</h3>
              <p className="products__price">$155</p>
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
              <img src={require("../../assets/imgs/recent-added/shop-img-115.png")} alt="CPU fan" />
              <h3>CPU Air Cooler P120 Fan Anodized Metal</h3>
              <p className="products__price">$155</p>
            </div>
          </div>
        </div>
      </section>
  )
}
export default ProductsRecently;