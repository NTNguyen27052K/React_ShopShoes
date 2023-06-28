import React, { Component } from "react";
import ProductItem from "./ProductItem";

export default class ProductList extends Component {
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
      <ProductItem
        item={this.props.productsData}
        setStateModal={this.props.setStateModal}
      ></ProductItem>
    );
  }
}
