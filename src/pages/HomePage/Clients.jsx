import React from "react";
import "./HomePage.css";

const Clients = () => {
  return (
    <section className="clients container">
        <div className="clients__container">
          <div className="clients__item">
            <img src={require("../../assets/imgs/clients-imgs/client-1-1-1.png")} alt="Client 1" className="clients__image" />
          </div>
          <div className="clients__item">
            <img src={require("../../assets/imgs/clients-imgs/client-2-2-2.png")} alt="Client 2" className="clients__image" />
          </div>
          <div className="clients__item">
            <img src={require("../../assets/imgs/clients-imgs/client-3-3-3.png")} alt="Client 3" className="clients__image" />
          </div>
          <div className="clients__item">
            <img src={require("../../assets/imgs/clients-imgs/client-4-4-4.png")} alt="Client 4" className="clients__image" />
          </div>
          <div className="clients__item">
            <img src={require("../../assets/imgs/clients-imgs/client-5-5-5.png")} alt="Client 5" className="clients__image" />
          </div>
          <div className="clients__item">
            <img src={require("../../assets/imgs/clients-imgs/client-6-6-6.png")} alt="Client 6" className="clients__image" />
          </div>
        </div>
      </section>
  )
}
export default Clients;