import React from "react";
import "./HomePage.css";

const CategoryHighlights = () => {
  return (
    <div className="categories">
        <div className="container__homepage">
          <ul className="categories__list">
            <li className="categories__item">
              <a href="#!">
                <div className="categories__item-icon">
                  <img src={require("../../assets/imgs/icons/categories/pc-display.svg").default} alt="Computers Icon" />
                </div>
                <span>Computers &amp; Laptops</span>
              </a>
            </li>
            <li className="categories__item">
              <a href="#!">
                <div className="categories__item-icon">
                  <img src={require("../../assets/imgs/icons/categories/controller.svg").default} alt="Controller Icon" />
                </div>
                <span>Smartphones &amp; Tablets</span>
              </a>
            </li>
            <li className="categories__item">
              <a href="#!">
                <div className="categories__item-icon">
                  <img src={require("../../assets/imgs/icons/categories/camera.svg").default} alt="Camera Icon" />
                </div>
                <span>Cameras &amp; Lenses</span>
              </a>
            </li>
            <li className="categories__item">
              <a href="#!">
                <div className="categories__item-icon">
                  <img src={require("../../assets/imgs/icons/categories/smartwatch.svg").default} alt="Smartwatch Icon" />
                </div>
                <span>Appliances</span>
              </a>
            </li>
            <li className="categories__item">
              <a href="#!">
                <div className="categories__item-icon">
                  <img src={require("../../assets/imgs/icons/categories/tv.svg").default} alt="TV Icon" />
                </div>
                <span>TV &amp; Audio</span>
              </a>
            </li>
            <li className="categories__item">
              <a href="#!">
                <div className="categories__item-icon">
                  <img src={require("../../assets/imgs/icons/categories/headphones.svg").default} alt="Headphones Icon" />
                </div>
                <span>Headphones</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
  )
}
export default CategoryHighlights;