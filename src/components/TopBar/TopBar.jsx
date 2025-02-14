import React from "react";
import "./TopBar.css";

const TopBar = () => {
  return (
    <div className="top-bar">
      <div className="container__homepage">
        <div className="top-bar__inner">
          <div className="top-bar__left">
            <div className="top-bar__menu-icon">
              <img src={require("../../assets/imgs/icons/top-bar/shop.svg").default} alt="Shop Icon" />
            </div>
            <span>WELCOME TO WORLDWIDE GIZMOS STORE</span>
          </div>
          <div className="top-bar__right">
            <ul>
              <li>
                <div className="top-bar__menu-icon">
                  <img src={require("../../assets/imgs/icons/top-bar/geo-alt-fill.svg").default} alt="Geo Icon" />
                </div>
                <span>STORE LOCATOR</span>
              </li>
              <li>
                <div className="top-bar__menu-icon">
                  <img src={require("../../assets/imgs/icons/top-bar/truck.svg").default} alt="Truck Icon" />
                </div>
                <span>FREE SHIPPING &amp; RETURNS</span>
              </li>
              <li>
                <div className="top-bar__menu-icon">
                  <img src={require("../../assets/imgs/icons/top-bar/person-fill.svg").default} alt="Person Icon" />
                </div>
                <span>MY ACCOUNT</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
