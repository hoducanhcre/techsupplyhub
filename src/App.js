import './App.css';

function App() {
  return (
    <>
      {/* TOP BAR */}
      <div className="top-bar">
        <div className="container__homepage">
          <div className="top-bar__inner">
            <div className="top-bar__left">
              <div className="top-bar__menu-icon">
                <img src={require("./assets/imgs/icons/top-bar/shop.svg").default} alt="Shop Icon" />
              </div>
              <span>WELCOME TO WORLDWIDE GIZMOS STORE</span>
            </div>
            <div className="top-bar__right">
              <ul>
                <li>
                  <div className="top-bar__menu-icon">
                    <img src={require("./assets/imgs/icons/top-bar/geo-alt-fill.svg").default} alt="Geo Icon" />
                  </div>
                  <span>STORE LOCATOR</span>
                </li>
                <li>
                  <div className="top-bar__menu-icon">
                    <img src={require("./assets/imgs/icons/top-bar/truck.svg").default} alt="Truck Icon" />
                  </div>
                  <span>FREE SHIPPING &amp; RETURNS</span>
                </li>
                <li>
                  <div className="top-bar__menu-icon">
                    <img src={require("./assets/imgs/icons/top-bar/person-fill.svg").default} alt="Person Icon" />
                  </div>
                  <span>MY ACCOUNT</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* HEADER */}
      <header className="header">
        <div className="container__homepage">
          <div className="header__inner">
            <div className="header__logo">
              <img src={require("./assets/imgs/logo-white-new.png")} alt="logo-white-new" />
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
                  <img src={require("./assets/imgs/icons/header/search.svg").default} alt="Search Icon" />
                </div>
              </a>
              <a href="#!" title="Compare">
                <div className="header__icon-right">
                  <img src={require("./assets/imgs/icons/header/arrow-left-right.svg").default} alt="Compare Icon" />
                </div>
              </a>
              <a href="#!" title="Wishlist">
                <div className="header__icon-right">
                  <img src={require("./assets/imgs/icons/header/heart.svg").default} alt="Heart Icon" />
                </div>
              </a>
              <a href="#!" title="Cart">
                <div className="header__icon-right">
                  <img src={require("./assets/imgs/icons/header/cart.svg").default} alt="Cart Icon" />
                </div>
              </a>
              <a href="#!" title="User">
                <div className="header__icon-right">
                  <img src={require("./assets/imgs/icons/header/person.svg").default} alt="User Icon" />
                </div>
              </a>
              <span className="header__price">1,000</span>
            </div>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="hero">
        <div className="container__homepage hero__content">
          <div className="hero__text">
            <h2>Pro Gaming Headphones</h2>
            <p>VATIA CC24/KX Series</p>
            <a href="#!" className="btn-primary">Shop Now</a>
          </div>
        </div>
      </section>

      {/* CATEGORIES */}
      <div className="categories">
        <div className="container__homepage">
          <ul className="categories__list">
            <li className="categories__item">
              <a href="#!">
                <div className="categories__item-icon">
                  <img src={require("./assets/imgs/icons/categories/pc-display.svg").default} alt="Computers Icon" />
                </div>
                <span>Computers &amp; Laptops</span>
              </a>
            </li>
            <li className="categories__item">
              <a href="#!">
                <div className="categories__item-icon">
                  <img src={require("./assets/imgs/icons/categories/controller.svg").default} alt="Controller Icon" />
                </div>
                <span>Smartphones &amp; Tablets</span>
              </a>
            </li>
            <li className="categories__item">
              <a href="#!">
                <div className="categories__item-icon">
                  <img src={require("./assets/imgs/icons/categories/camera.svg").default} alt="Camera Icon" />
                </div>
                <span>Cameras &amp; Lenses</span>
              </a>
            </li>
            <li className="categories__item">
              <a href="#!">
                <div className="categories__item-icon">
                  <img src={require("./assets/imgs/icons/categories/smartwatch.svg").default} alt="Smartwatch Icon" />
                </div>
                <span>Appliances</span>
              </a>
            </li>
            <li className="categories__item">
              <a href="#!">
                <div className="categories__item-icon">
                  <img src={require("./assets/imgs/icons/categories/tv.svg").default} alt="TV Icon" />
                </div>
                <span>TV &amp; Audio</span>
              </a>
            </li>
            <li className="categories__item">
              <a href="#!">
                <div className="categories__item-icon">
                  <img src={require("./assets/imgs/icons/categories/headphones.svg").default} alt="Headphones Icon" />
                </div>
                <span>Headphones</span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* PRODUCTS - TOP RATED */}
      <section className="products products--top-rated">
        <div className="container__homepage">
          <h2>Top Rated Products</h2>
          <div className="products__grid">
            <div className="products__card">
              <span className="products__badge">Premium Laptops</span>
              <div className="products__actions">
                <a href="#!" className="products__like">
                  <img src={require("./assets/imgs/icons/products/heart-wishlist.svg").default} alt="Wishlist Icon" />
                </a>
                <a href="#!" className="products__compare">
                  <img src={require("./assets/imgs/icons/products/arrow-compare.svg").default} alt="Compare Icon" />
                </a>
              </div>
              <img src={require("./assets/imgs/products/shop-img-102.png")} alt="Product 1" />
              <h3>Wireless PC Mouse XF-550 in Carbon Black/Grey/Green</h3>
              <p className="products__price">$290</p>
            </div>

            <div className="products__card">
              <span className="products__badge">Premium Laptops</span>
              <div className="products__actions">
                <a href="#!" className="products__like">
                  <img src={require("./assets/imgs/icons/products/heart-wishlist.svg").default} alt="Wishlist Icon" />
                </a>
                <a href="#!" className="products__compare">
                  <img src={require("./assets/imgs/icons/products/arrow-compare.svg").default} alt="Compare Icon" />
                </a>
              </div>
              <img src={require("./assets/imgs/products/shop-img-103.png")} alt="Product 2" />
              <h3>Fractal Design 850-PW Tempered Glass Computer Case</h3>
              <p className="products__price">$2790</p>
            </div>

            <div className="products__card">
              <span className="products__badge">Premium Laptops</span>
              <div className="products__actions">
                <a href="#!" className="products__like">
                  <img src={require("./assets/imgs/icons/products/heart-wishlist.svg").default} alt="Wishlist Icon" />
                </a>
                <a href="#!" className="products__compare">
                  <img src={require("./assets/imgs/icons/products/arrow-compare.svg").default} alt="Compare Icon" />
                </a>
              </div>
              <img src={require("./assets/imgs/products/shop-img-104.png")} alt="Product 3" />
              <h3>MBD214 147GB 10000 RPM 16MB Cache SAS 6Gb/s 2.5″ Hard Drive</h3>
              <p className="products__price">$2330</p>
            </div>

            <div className="products__card">
              <span className="products__badge">Premium Laptops</span>
              <div className="products__actions">
                <a href="#!" className="products__like">
                  <img src={require("./assets/imgs/icons/products/heart-wishlist.svg").default} alt="Wishlist Icon" />
                </a>
                <a href="#!" className="products__compare">
                  <img src={require("./assets/imgs/icons/products/arrow-compare.svg").default} alt="Compare Icon" />
                </a>
              </div>
              <img src={require("./assets/imgs/products/shop-img-105.png")} alt="Product 4" />
              <h3>FTW-3553 8GB 2666MHz DDR4 DIMM Desktop Memory</h3>
              <p className="products__price">$1280</p>
            </div>

            <div className="products__card">
              <span className="products__badge">Premium Laptops</span>
              <div className="products__actions">
                <a href="#!" className="products__like">
                  <img src={require("./assets/imgs/icons/products/heart-wishlist.svg").default} alt="Wishlist Icon" />
                </a>
                <a href="#!" className="products__compare">
                  <img src={require("./assets/imgs/icons/products/arrow-compare.svg").default} alt="Compare Icon" />
                </a>
              </div>
              <img src={require("./assets/imgs/products/shop-img-106.png")} alt="Product 5" />
              <h3>High Definition Monitor Red/Black Expo SDS-855697</h3>
              <p className="products__price">$1490</p>
            </div>
          </div>
        </div>
      </section>

      {/* BANNERS */}
      <section className="banners">
        <div className="banners__container">
          <div className="banner__box">
            <img src={require("./assets/imgs/home-11-banner-2.jpg")} alt="EZ-77 PC" />
            <div className="banner__content">
              <h4>EZ-77 PC Worldwide</h4>
              <p>MF841HN/A 13"</p>
              <p className="banners__des-price">Starting at</p>
              <p className="banners__price">$1750</p>
            </div>
          </div>
          <div className="banner__box">
            <img src={require("./assets/imgs/home-11-banner-1.jpg")} alt="Camera" />
            <div className="banner__content">
              <h4>Limited Weekly Discount</h4>
              <p className="banners__des-price">Discount -30%</p>
              <p className="banners__price">$349</p>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCTS - FEATURED */}
      <section className="products products--featured">
        <div className="container__homepage">
          <h2>Featured Products</h2>
          <div className="products__grid">
            <div className="products__card">
              <span className="products__badge">Premium Laptops</span>
              <div className="products__actions">
                <a href="#!" className="products__like">
                  <img src={require("./assets/imgs/icons/products/heart-wishlist.svg").default} alt="Wishlist Icon" />
                </a>
                <a href="#!" className="products__compare">
                  <img src={require("./assets/imgs/icons/products/arrow-compare.svg").default} alt="Compare Icon" />
                </a>
              </div>
              <img src={require("./assets/imgs/products-2/shop-img-95.png")} alt="GPU" />
              <h3>RX 6900 Devil-6 8GB GDDR6 Graphics Card</h3>
              <p className="products__price">$990</p>
            </div>
            <div className="products__card">
              <span className="products__badge">Premium Laptops</span>
              <div className="products__actions">
                <a href="#!" className="products__like">
                  <img src={require("./assets/imgs/icons/products/heart-wishlist.svg").default} alt="Wishlist Icon" />
                </a>
                <a href="#!" className="products__compare">
                  <img src={require("./assets/imgs/icons/products/arrow-compare.svg").default} alt="Compare Icon" />
                </a>
              </div>
              <img src={require("./assets/imgs/products-2/shop-img-96.png")} alt="Case" />
              <h3>High-Airflow C-10 Computer Case 1020W Power</h3>
              <p className="products__price">$3,850</p>
            </div>
            <div className="products__card">
              <span className="products__badge">Premium Laptops</span>
              <div className="products__actions">
                <a href="#!" className="products__like">
                  <img src={require("./assets/imgs/icons/products/heart-wishlist.svg").default} alt="Wishlist Icon" />
                </a>
                <a href="#!" className="products__compare">
                  <img src={require("./assets/imgs/icons/products/arrow-compare.svg").default} alt="Compare Icon" />
                </a>
              </div>
              <img src={require("./assets/imgs/products-2/shop-img-97.png")} alt="Monitor" />
              <h3>LED 4K Smart TV Ergo G-55K 1920x1080P</h3>
              <p className="products__price">$1,590</p>
            </div>
            <div className="products__card">
              <span className="products__badge">Premium Laptops</span>
              <div className="products__actions">
                <a href="#!" className="products__like">
                  <img src={require("./assets/imgs/icons/products/heart-wishlist.svg").default} alt="Wishlist Icon" />
                </a>
                <a href="#!" className="products__compare">
                  <img src={require("./assets/imgs/icons/products/arrow-compare.svg").default} alt="Compare Icon" />
                </a>
              </div>
              <img src={require("./assets/imgs/products-2/shop-img-98.png")} alt="GPU" />
              <h3>RX 6900 Devil-6 8GB GDDR6 Graphics Card</h3>
              <p className="products__price">$990</p>
            </div>
            <div className="products__card">
              <span className="products__badge">Premium Laptops</span>
              <div className="products__actions">
                <a href="#!" className="products__like">
                  <img src={require("./assets/imgs/icons/products/heart-wishlist.svg").default} alt="Wishlist Icon" />
                </a>
                <a href="#!" className="products__compare">
                  <img src={require("./assets/imgs/icons/products/arrow-compare.svg").default} alt="Compare Icon" />
                </a>
              </div>
              <img src={require("./assets/imgs/products-2/shop-img-99.png")} alt="Case" />
              <h3>High-Airflow C-10 Computer Case 1020W Power</h3>
              <p className="products__price">$3,850</p>
            </div>
            <div className="products__card">
              <span className="products__badge">Premium Laptops</span>
              <div className="products__actions">
                <a href="#!" className="products__like">
                  <img src={require("./assets/imgs/icons/products/heart-wishlist.svg").default} alt="Wishlist Icon" />
                </a>
                <a href="#!" className="products__compare">
                  <img src={require("./assets/imgs/icons/products/arrow-compare.svg").default} alt="Compare Icon" />
                </a>
              </div>
              <img src={require("./assets/imgs/products-2/shop-img-100.png")} alt="Monitor" />
              <h3>LED 4K Smart TV Ergo G-55K 1920x1080P</h3>
              <p className="products__price">$1,590</p>
            </div>
            <div className="products__card">
              <span className="products__badge">Premium Laptops</span>
              <div className="products__actions">
                <a href="#!" className="products__like">
                  <img src={require("./assets/imgs/icons/products/heart-wishlist.svg").default} alt="Wishlist Icon" />
                </a>
                <a href="#!" className="products__compare">
                  <img src={require("./assets/imgs/icons/products/arrow-compare.svg").default} alt="Compare Icon" />
                </a>
              </div>
              <img src={require("./assets/imgs/products-2/shop-img-101.png")} alt="Monitor" />
              <h3>LED 4K Smart TV Ergo G-55K 1920x1080P</h3>
              <p className="products__price">$1,590</p>
            </div>
          </div>
        </div>
      </section>

      {/* CONSOLE */}
      <section className="console">
        <div className="console__inner">
          <div className="console__text">
            <h2 className="console__title">Latest Gaming Console</h2>
            <p className="console__sub">ASUS CX70 2QF-621XPL 13"</p>
            <a href="#!" className="btn-primary">Shop Now</a>
          </div>
          <div className="console__img">
            <img src={require("./assets/imgs/home-11-img-1.jpg")} alt="Gaming Console" />
          </div>
        </div>
      </section>

      {/* PRODUCTS - TRENDING */}
      <section className="products products--trending">
        <div className="container__homepage">
          <h2>Trending Products</h2>
          <div className="products__grid">
            <div className="products__card">
              <span className="products__badge">Premium Laptops</span>
              <div className="products__actions">
                <a href="#!" className="products__like">
                  <img src={require("./assets/imgs/icons/products/heart-wishlist.svg").default} alt="Wishlist Icon" />
                </a>
                <a href="#!" className="products__compare">
                  <img src={require("./assets/imgs/icons/products/arrow-compare.svg").default} alt="Compare Icon" />
                </a>
              </div>
              <img src={require("./assets/imgs/trending-products/shop-img-107.png")} alt="Keyboard" />
              <h3>RGB Double-Shot PBT Quick Mechanical Keyboard</h3>
              <p className="products__price">$390</p>
            </div>
            <div className="products__card">
              <span className="products__badge">Premium Laptops</span>
              <div className="products__actions">
                <a href="#!" className="products__like">
                  <img src={require("./assets/imgs/icons/products/heart-wishlist.svg").default} alt="Wishlist Icon" />
                </a>
                <a href="#!" className="products__compare">
                  <img src={require("./assets/imgs/icons/products/arrow-compare.svg").default} alt="Compare Icon" />
                </a>
              </div>
              <img src={require("./assets/imgs/trending-products/shop-img-109.png")} alt="Headphone" />
              <h3>Gaming Headphones Over-Ear FX-9999</h3>
              <p className="products__price">$810</p>
            </div>
            <div className="products__card">
              <span className="products__badge">Premium Laptops</span>
              <div className="products__actions">
                <a href="#!" className="products__like">
                  <img src={require("./assets/imgs/icons/products/heart-wishlist.svg").default} alt="Wishlist Icon" />
                </a>
                <a href="#!" className="products__compare">
                  <img src={require("./assets/imgs/icons/products/arrow-compare.svg").default} alt="Compare Icon" />
                </a>
              </div>
              <img src={require("./assets/imgs/trending-products/shop-img-110.png")} alt="Keyboard" />
              <h3>RGB Double-Shot PBT Quick Mechanical Keyboard</h3>
              <p className="products__price">$390</p>
            </div>
            <div className="products__card">
              <span className="products__badge">Premium Laptops</span>
              <div className="products__actions">
                <a href="#!" className="products__like">
                  <img src={require("./assets/imgs/icons/products/heart-wishlist.svg").default} alt="Wishlist Icon" />
                </a>
                <a href="#!" className="products__compare">
                  <img src={require("./assets/imgs/icons/products/arrow-compare.svg").default} alt="Compare Icon" />
                </a>
              </div>
              <img src={require("./assets/imgs/trending-products/shop-img-96.png")} alt="Headphone" />
              <h3>Gaming Headphones Over-Ear FX-9999</h3>
              <p className="products__price">$810</p>
            </div>
            <div className="products__card">
              <span className="products__badge">Premium Laptops</span>
              <div className="products__actions">
                <a href="#!" className="products__like">
                  <img src={require("./assets/imgs/icons/products/heart-wishlist.svg").default} alt="Wishlist Icon" />
                </a>
                <a href="#!" className="products__compare">
                  <img src={require("./assets/imgs/icons/products/arrow-compare.svg").default} alt="Compare Icon" />
                </a>
              </div>
              <img src={require("./assets/imgs/trending-products/shop-img-99.png")} alt="Keyboard" />
              <h3>RGB Double-Shot PBT Quick Mechanical Keyboard</h3>
              <p className="products__price">$390</p>
            </div>
          </div>
        </div>
      </section>

      {/* CLIENTS */}
      <section className="clients container">
        <div className="clients__container">
          <div className="clients__item">
            <img src={require("./assets/imgs/clients-imgs/client-1-1-1.png")} alt="Client 1" className="clients__image" />
          </div>
          <div className="clients__item">
            <img src={require("./assets/imgs/clients-imgs/client-2-2-2.png")} alt="Client 2" className="clients__image" />
          </div>
          <div className="clients__item">
            <img src={require("./assets/imgs/clients-imgs/client-3-3-3.png")} alt="Client 3" className="clients__image" />
          </div>
          <div className="clients__item">
            <img src={require("./assets/imgs/clients-imgs/client-4-4-4.png")} alt="Client 4" className="clients__image" />
          </div>
          <div className="clients__item">
            <img src={require("./assets/imgs/clients-imgs/client-5-5-5.png")} alt="Client 5" className="clients__image" />
          </div>
          <div className="clients__item">
            <img src={require("./assets/imgs/clients-imgs/client-6-6-6.png")} alt="Client 6" className="clients__image" />
          </div>
        </div>
      </section>

      {/* PRODUCT BANNERS */}
      <section className="product-banners">
        <div className="product-banners__container">
          <div className="product-banners__box">
            <img src={require("./assets/imgs/banners-2/home-11-banner-5.jpg")} alt="banner" />
            <div className="product-banners__content">
              <h4>Limited Weekly Discount</h4>
              <p className="product-banners__shop-now">SHOP NOW &nbsp; &gt;</p>
            </div>
          </div>
          <div className="product-banners__box">
            <img src={require("./assets/imgs/banners-2/home-11-banner-4.jpg")} alt="banner" />
            <div className="product-banners__content">
              <h4>Photo Drones</h4>
              <p>MF841HN/A 13"</p>
              <p className="product-banners__discount">DISCOUNT -30%</p>
              <p className="product-banners__price">$75</p>
            </div>
          </div>
          <div className="product-banners__box">
            <img src={require("./assets/imgs/banners-2/home-11-banner-3.jpg")} alt="banner" />
            <div className="product-banners__content">
              <h4>PC Parts &amp; Elements</h4>
              <p className="product-banners__shop-now">SHOP NOW &nbsp; &gt;</p>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCTS - RECENTLY ADDED */}
      <section className="products products--recent">
        <div className="container__homepage">
          <h2>Recently Added</h2>
          <div className="products__grid">
            <div className="products__card">
              <span className="products__badge">Premium Laptops</span>
              <div className="products__actions">
                <a href="#!" className="products__like">
                  <img src={require("./assets/imgs/icons/products/heart-wishlist.svg").default} alt="Wishlist Icon" />
                </a>
                <a href="#!" className="products__compare">
                  <img src={require("./assets/imgs/icons/products/arrow-compare.svg").default} alt="Compare Icon" />
                </a>
              </div>
              <img src={require("./assets/imgs/recent-added/shop-img-111.png")} alt="Mouse" />
              <h3>Wireless PC Mouse XF-59</h3>
              <p className="products__price">$290</p>
            </div>
            <div className="products__card">
              <span className="products__badge">Premium Laptops</span>
              <div className="products__actions">
                <a href="#!" className="products__like">
                  <img src={require("./assets/imgs/icons/products/heart-wishlist.svg").default} alt="Wishlist Icon" />
                </a>
                <a href="#!" className="products__compare">
                  <img src={require("./assets/imgs/icons/products/arrow-compare.svg").default} alt="Compare Icon" />
                </a>
              </div>
              <img src={require("./assets/imgs/recent-added/shop-img-113.png")} alt="CPU fan" />
              <h3>CPU Air Cooler P120 Fan Anodized Metal</h3>
              <p className="products__price">$155</p>
            </div>
            <div className="products__card">
              <span className="products__badge">Premium Laptops</span>
              <div className="products__actions">
                <a href="#!" className="products__like">
                  <img src={require("./assets/imgs/icons/products/heart-wishlist.svg").default} alt="Wishlist Icon" />
                </a>
                <a href="#!" className="products__compare">
                  <img src={require("./assets/imgs/icons/products/arrow-compare.svg").default} alt="Compare Icon" />
                </a>
              </div>
              <img src={require("./assets/imgs/recent-added/shop-img-114.png")} alt="Mouse" />
              <h3>Wireless PC Mouse XF-59</h3>
              <p className="products__price">$290</p>
            </div>
            <div className="products__card">
              <span className="products__badge">Premium Laptops</span>
              <div className="products__actions">
                <a href="#!" className="products__like">
                  <img src={require("./assets/imgs/icons/products/heart-wishlist.svg").default} alt="Wishlist Icon" />
                </a>
                <a href="#!" className="products__compare">
                  <img src={require("./assets/imgs/icons/products/arrow-compare.svg").default} alt="Compare Icon" />
                </a>
              </div>
              <img src={require("./assets/imgs/recent-added/shop-img-115.png")} alt="CPU fan" />
              <h3>CPU Air Cooler P120 Fan Anodized Metal</h3>
              <p className="products__price">$155</p>
            </div>
            <div className="products__card">
              <span className="products__badge">Premium Laptops</span>
              <div className="products__actions">
                <a href="#!" className="products__like">
                  <img src={require("./assets/imgs/icons/products/heart-wishlist.svg").default} alt="Wishlist Icon" />
                </a>
                <a href="#!" className="products__compare">
                  <img src={require("./assets/imgs/icons/products/arrow-compare.svg").default} alt="Compare Icon" />
                </a>
              </div>
              <img src={require("./assets/imgs/recent-added/shop-img-115.png")} alt="CPU fan" />
              <h3>CPU Air Cooler P120 Fan Anodized Metal</h3>
              <p className="products__price">$155</p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
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
              <a href="#!"><img src={require("./assets/imgs/icons/social/spotify.svg").default} alt="Spotify" /></a>
              <a href="#!"><img src={require("./assets/imgs/icons/social/youtube.svg").default} alt="YouTube" /></a>
              <a href="#!"><img src={require("./assets/imgs/icons/social/twitter.svg").default} alt="Twitter" /></a>
              <a href="#!"><img src={require("./assets/imgs/icons/social/dribbble.svg").default} alt="Dribbble" /></a>
              <a href="#!"><img src={require("./assets/imgs/icons/social/instagram.svg").default} alt="Instagram" /></a>
              <a href="#!"><img src={require("./assets/imgs/icons/social/facebook.svg").default} alt="Facebook" /></a>
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
            <img src={require("./assets/imgs/logo-white-new.png")} alt="logo-white-new" />
          </div>
          <div className="footer__col footer__col--phone">
            <div className="footer__col-icon">
              <img src={require("./assets/imgs/icons/support/support-icon.svg").default} alt="Support Icon" />
            </div>
            <div className="footer__col-info">
              <h4>+0080 1234 56 789</h4>
            </div>
          </div>
          <div className="footer__col footer__col--shipping">
            <div className="footer__col-icon">
              <img src={require("./assets/imgs/icons/support/delivery-icon.svg").default} alt="Delivery Icon" />
            </div>
            <div className="footer__col-info">
              <h4>Amounts over $100</h4>
            </div>
          </div>
          <div className="footer__col footer__col--discount">
            <div className="footer__col-icon">
              <img src={require("./assets/imgs/icons/support/gift-icon.svg").default} alt="Gift Icon" />
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
            <img src={require("./assets/imgs/payments-icons-2xnew.png")} alt="Card" />
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
