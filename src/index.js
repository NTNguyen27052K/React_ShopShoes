import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./ShopStore/Components/Header";
import Body from "./ShopStore/Components/Body/Body";
import Footer from "./ShopStore/Components/Footer";
import "./ShopStore/sass/main.css";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div className="container" style={{ maxWidth: "1450px" }}>
    <Header />
    <Body />
    <Footer />
  </div>
);
