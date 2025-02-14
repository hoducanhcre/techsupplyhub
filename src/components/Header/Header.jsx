import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`header ${isSticky ? "sticky" : ""}`}>
      <div className="container__homepage">
        <div className="header__inner">
          <div className="header__logo">
            <NavLink to="/">  {/* Link về trang chủ */}
              <img src={require("../../assets/imgs/logo-white-new.png")} alt="logo-white-new" />
            </NavLink>
          </div>
          <nav className="header__nav">
            <ul>
              <li><NavLink to="/">Home</NavLink></li>  {/* Link trang chủ */}
              <li><NavLink to="/products">Products</NavLink></li>
              <li><NavLink to="/about">About Us</NavLink></li>
              <li><NavLink to="/news">News</NavLink></li>
              <li><NavLink to="/gallery">Gallery</NavLink></li>
              <li><a href="#">Support</a></li>  {/* Không có link */}
            </ul>
          </nav>
          <div className="header__icons">
            <a href="#!" title="Search">
              <div className="header__icon-right">
                <img src={require("../../assets/imgs/icons/header/search.svg").default} alt="Search Icon" />
              </div>
            </a>
            <a href="#!" title="User">
              <div className="header__icon-right">
                <img src={require("../../assets/imgs/icons/header/person.svg").default} alt="User Icon" />
              </div>
            </a>
            <span className="header__price">1,000</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
