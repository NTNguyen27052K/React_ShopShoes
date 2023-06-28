import React, { Component } from "react";
import ShopStore from "./ShopStore";
export default class Body extends Component {
  state = {
    pageHome: "active",
    pageDetail: "",
  };
  setStateModal = (pageHome, pageDetail) => {
    this.setState({
      pageHome: pageHome,
      pageDetail: pageDetail,
    });
    console.log(this.state.pageDetail);
  };
  render() {
    // console.log(this.state.pageHome);
    return (
      <div className="row">
        <div className="col-2">
          <ul className="nav nav-pills" style={{ marginTop: "25px" }}>
            <li className="nav-item mb-3">
              <a
                className={`nav-link glow-on-hover text-center ${this.state.pageHome}`}
                style={{ lineHeight: "30px" }}
                aria-current="page"
                href=""
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link glow-on-hover text-center ${this.state.pageDetail}`}
                style={{ lineHeight: "30px" }}
                href=""
              >
                Detail
              </a>
            </li>
          </ul>
        </div>
        <div className="col-10">
          <div className="row">
            <ShopStore setStateModal={this.setStateModal}></ShopStore>
          </div>
        </div>
      </div>
    );
  }
}
{
  /* <div style={{ marginTop: "20px" }}>
  <button className="glow-on-hover active w-100 mb-2">Home</button>
</div>;
<button className="glow-on-hover w-100">Detail</button>; */
}
