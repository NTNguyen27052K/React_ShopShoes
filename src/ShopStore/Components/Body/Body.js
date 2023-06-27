import React, { Component } from "react";
import ShopStore from "./ShopStore";
export default class Body extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-2">
          <div style={{ marginTop: "20px" }}>
            <button className="glow-on-hover active w-100 mb-2">Home</button>
          </div>
          <div>
            <button className="glow-on-hover w-100">Detail</button>
          </div>
        </div>
        <div className="col-10">
          <div className="row">
            <ShopStore></ShopStore>
          </div>
        </div>
      </div>
    );
  }
}
