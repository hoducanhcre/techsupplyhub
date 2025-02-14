import React from "react";
import "./HomePage.css";

const Console = () => {
  return (
    <section className="console">
        <div className="console__inner">
          <div className="console__text">
            <h2 className="console__title">Latest Gaming Console</h2>
            <p className="console__sub">ASUS CX70 2QF-621XPL 13"</p>
            <a href="#!" className="btn-primary">Shop Now</a>
          </div>
          <div className="console__img">
            <img src={require("../../assets/imgs/home-11-img-1.jpg")} alt="Gaming Console" />
          </div>
        </div>
      </section>
  )
}
export default Console;