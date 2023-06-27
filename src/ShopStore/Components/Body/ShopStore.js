import React, { Component } from "react";
import ProductList from "./ProductList";
import products from "../../../data.json";

export default class ShopStore extends Component {
  state = {
    pagePlace: "home",
  };
  setStateModal = (page) => {
    this.setState({ pagePlace: page });
  };
  render() {
    console.log("pagePlace: " + this.state.pagePlace);
    return (
      <ProductList
        productsData={products}
        setStateModal={this.setStateModal}
      ></ProductList>
    );
  }
}
