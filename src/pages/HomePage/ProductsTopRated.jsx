import React from "react";
import "./HomePage.css";

const ProductsTopRated = () => {
  return (
    <section className="products products--top-rated">
        <div className="container__homepage">
          <h2>Top Rated Products</h2>
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
              <img src={require("../../assets/imgs/products/shop-img-102.png")} alt="Product 1" />
              <h3>Wireless PC Mouse XF-550 in Carbon Black/Grey/Green</h3>
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
              <img src={require("../../assets/imgs/products/shop-img-103.png")} alt="Product 2" />
              <h3>Fractal Design 850-PW Tempered Glass Computer Case</h3>
              <p className="products__price">$2790</p>
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
              <img src={require("../../assets/imgs/products/shop-img-104.png")} alt="Product 3" />
              <h3>MBD214 147GB 10000 RPM 16MB Cache SAS 6Gb/s 2.5″ Hard Drive</h3>
              <p className="products__price">$2330</p>
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
              <img src={require("../../assets/imgs/products/shop-img-105.png")} alt="Product 4" />
              <h3>FTW-3553 8GB 2666MHz DDR4 DIMM Desktop Memory</h3>
              <p className="products__price">$1280</p>
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
              <img src={require("../../assets/imgs/products/shop-img-106.png")} alt="Product 5" />
              <h3>High Definition Monitor Red/Black Expo SDS-855697</h3>
              <p className="products__price">$1490</p>
            </div>
          </div>
        </div>
      </section>
  )
}
export default ProductsTopRated;