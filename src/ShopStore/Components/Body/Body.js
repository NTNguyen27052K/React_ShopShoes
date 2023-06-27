import React, { Component } from "react";
import ShopStore from "./ShopStore";
export default class Body extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-3">
          <div>
            <button className="btn btn-danger w-100 mb-2">Home</button>
          </div>
          <div>
            <button className="btn btn-danger w-100">Detail</button>
          </div>
        </div>
        <div className="col-9">
          <div className="row">
            <ShopStore></ShopStore>
          </div>
        </div>
      </div>
    );
  }
}
