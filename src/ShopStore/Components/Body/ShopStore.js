import React, { Component } from "react";
import ProductList from "./ProductList";
import products from "../../../data.json";

export default class ShopStore extends Component {
  setStateModal = {
    pagePlace: "home",
  };
  render() {
    return (
      <ProductList
        productsData={products}
        setStateModal={this.setStateModal}
      ></ProductList>
    );
  }
}
