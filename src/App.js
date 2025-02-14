import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import TopBar from "./components/TopBar/TopBar";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Homepage from "./pages/HomePage";  // Trang chủ
import About from "./pages/About";
import News from "./pages/News";
import Gallery from "./pages/Gallery";
import Products from "./pages/Products"; 

const basename = process.env.NODE_ENV === "development" ? "/" : "/techsupplyhub";

function App() {
  return (
    <Router>
      <TopBar />
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />  {/* Trang chủ */}
        <Route path="/products" element={<Products />} />
        <Route path="/about" element={<About />} />
        <Route path="/news" element={<News />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
