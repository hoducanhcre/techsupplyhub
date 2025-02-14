import React from "react";
import "./Footer.css";

const Header = () => {
  return (
    <footer className="footer">
    <div className="footer__row container">
      <div className="footer__col-newsletter footer__col--newsletter-title">
        <h2>Sign up to Newsletter</h2>
      </div>
      <div className="footer__col footer__col--newsletter-box">
        <div className="footer__newsletter-box">
          <input type="email" placeholder="Your Email Address" />
          <button className="btn-primary">
            <span>Subscribe</span>
          </button>
        </div>
      </div>
      <div className="footer__col-newsletter footer__col--follow">
        <h3>Follow us on:</h3>
        <div className="footer__social-icons">
          <a href="#!"><img src={require("../../assets/imgs/icons/social/spotify.svg").default} alt="Spotify" /></a>
          <a href="#!"><img src={require("../../assets/imgs/icons/social/youtube.svg").default} alt="YouTube" /></a>
          <a href="#!"><img src={require("../../assets/imgs/icons/social/twitter.svg").default} alt="Twitter" /></a>
          <a href="#!"><img src={require("../../assets/imgs/icons/social/dribbble.svg").default} alt="Dribbble" /></a>
          <a href="#!"><img src={require("../../assets/imgs/icons/social/instagram.svg").default} alt="Instagram" /></a>
          <a href="#!"><img src={require("../../assets/imgs/icons/social/facebook.svg").default} alt="Facebook" /></a>
        </div>
      </div>
    </div>

    <hr className="footer__divider container" />

    <div className="footer__row container footer__links">
      <div className="footer__col">
        <h4>Privacy Policy</h4>
        <ul className="footer__list">
          <li><a href="#!">Returns &amp; Exchanges</a></li>
          <li><a href="#!">Payment Terms</a></li>
          <li><a href="#!">Delivery Terms</a></li>
          <li><a href="#!">Payment &amp; Pricing</a></li>
          <li><a href="#!">Terms Of Use</a></li>
          <li><a href="#!">Privacy Policy</a></li>
        </ul>
      </div>
      <div className="footer__col">
        <h4>Get Involved</h4>
        <ul className="footer__list">
          <li><a href="#!">About Us</a></li>
          <li><a href="#!">Our Vision</a></li>
          <li><a href="#!">Orders &amp; Shipping</a></li>
          <li><a href="#!">Office Supplies</a></li>
          <li><a href="#!">Contact Us</a></li>
          <li><a href="#!">Customer Service</a></li>
        </ul>
      </div>
      <div className="footer__col">
        <h4>Quick Links</h4>
        <ul className="footer__list">
          <li><a href="#!">Smartphones</a></li>
          <li><a href="#!">Headphones</a></li>
          <li><a href="#!">Laptop &amp; Tablet</a></li>
          <li><a href="#!">Monitors</a></li>
          <li><a href="#!">Printers</a></li>
          <li><a href="#!">Gadgets</a></li>
        </ul>
      </div>
      <div className="footer__col">
        <h4>Customer Care</h4>
        <ul className="footer__list">
          <li><a href="#!">My Account</a></li>
          <li><a href="#!">Store Locator</a></li>
          <li><a href="#!">Customer Service</a></li>
          <li><a href="#!">Returns/Exchange</a></li>
          <li><a href="#!">Product Support</a></li>
          <li><a href="#!">FAQs</a></li>
        </ul>
      </div>
    </div>

    <hr className="footer__divider container" />

    <div className="footer__row footer__row--info container footer__info">
      <div className="footer__col footer__col--logo">
        <img src={require("../../assets/imgs/logo-white-new.png")} alt="logo-white-new" />
      </div>
      <div className="footer__col footer__col--phone">
        <div className="footer__col-icon">
          <img src={require("../../assets/imgs/icons/support/support-icon.svg").default} alt="Support Icon" />
        </div>
        <div className="footer__col-info">
          <h4>+0080 1234 56 789</h4>
        </div>
      </div>
      <div className="footer__col footer__col--shipping">
        <div className="footer__col-icon">
          <img src={require("../../assets/imgs/icons/support/delivery-icon.svg").default} alt="Delivery Icon" />
        </div>
        <div className="footer__col-info">
          <h4>Amounts over $100</h4>
        </div>
      </div>
      <div className="footer__col footer__col--discount">
        <div className="footer__col-icon">
          <img src={require("../../assets/imgs/icons/support/gift-icon.svg").default} alt="Gift Icon" />
        </div>
        <div className="footer__col-info">
          <h4>Save up to 20%</h4>
        </div>
      </div>
    </div>

    <hr className="footer__divider container" />

    <div className="footer__row footer__row--info container footer__bottom">
      <div className="footer__bottom-left">
        <p>© 2022 QODE INTERACTIVE, ALL RIGHTS RESERVED</p>
      </div>
      <div className="footer__bottom-right">
        <img src={require("../../assets/imgs/payments-icons-2xnew.png")} alt="Card" />
      </div>
    </div>
  </footer>
  );
};

export default Header;
