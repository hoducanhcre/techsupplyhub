import React, { useEffect, useState } from "react";
import "./Header.css";

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) { // Khi cuộn xuống hơn 40px (độ cao của Top Bar)
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
            <img src={require("../../assets/imgs/logo-white-new.png")} alt="logo-white-new" />
          </div>
          <nav className="header__nav">
            <ul>
              <li><a href="#!" className="active">Home</a></li>
              <li><a href="#!">Pages</a></li>
              <li><a href="#!">Shop</a></li>
              <li><a href="#!">Blog</a></li>
              <li><a href="#!">Landing</a></li>
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
