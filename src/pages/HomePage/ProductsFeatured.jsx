import React from "react";
import "./HomePage.css";

const ProductsFeatured = () => {
  return (
    <section className="products products--featured">
        <div className="container__homepage">
          <h2>Featured Products</h2>
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
              <img src={require("../../assets/imgs/products-2/shop-img-95.png")} alt="GPU" />
              <h3>RX 6900 Devil-6 8GB GDDR6 Graphics Card</h3>
              <p className="products__price">$990</p>
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
              <img src={require("../../assets/imgs/products-2/shop-img-96.png")} alt="Case" />
              <h3>High-Airflow C-10 Computer Case 1020W Power</h3>
              <p className="products__price">$3,850</p>
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
              <img src={require("../../assets/imgs/products-2/shop-img-97.png")} alt="Monitor" />
              <h3>LED 4K Smart TV Ergo G-55K 1920x1080P</h3>
              <p className="products__price">$1,590</p>
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
              <img src={require("../../assets/imgs/products-2/shop-img-98.png")} alt="GPU" />
              <h3>RX 6900 Devil-6 8GB GDDR6 Graphics Card</h3>
              <p className="products__price">$990</p>
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
              <img src={require("../../assets/imgs/products-2/shop-img-99.png")} alt="Case" />
              <h3>High-Airflow C-10 Computer Case 1020W Power</h3>
              <p className="products__price">$3,850</p>
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
              <img src={require("../../assets/imgs/products-2/shop-img-100.png")} alt="Monitor" />
              <h3>LED 4K Smart TV Ergo G-55K 1920x1080P</h3>
              <p className="products__price">$1,590</p>
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
              <img src={require("../../assets/imgs/products-2/shop-img-101.png")} alt="Monitor" />
              <h3>LED 4K Smart TV Ergo G-55K 1920x1080P</h3>
              <p className="products__price">$1,590</p>
            </div>
          </div>
        </div>
      </section>
  )
}
export default ProductsFeatured;