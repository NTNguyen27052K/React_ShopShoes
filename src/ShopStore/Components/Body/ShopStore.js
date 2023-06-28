import React, { Component } from "react";
import ProductList from "./ProductList";
import products from "../../../data.json";

export default class ShopStore extends Component {
  // state = {
  //   pagePlace: "home",
  // };
  // setStateModal = (page) => {
  //   this.setState({ pagePlace: page });
  // };
  render() {
    // console.log(this.props.setStateModal);
    return (
      // <button
      //   onClick={() => {
      //     this.props.setStateModal("", "active");
      //   }}
      // >
      //   Lorem ipsum dolor sit amet consectetur, adipisicing elit.
      // </button>
      <ProductList
        productsData={products}
        setStateModal={this.props.setStateModal}
      ></ProductList>
    );
  }
}
