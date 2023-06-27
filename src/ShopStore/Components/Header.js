import React, { Component } from "react";

export default class Header extends Component {
  render() {
    return (
      <div className="wrapper">
        <svg>
          <text x="50%" y="50%" dy=".35em" textAnchor="middle">
            Shop Shoes
          </text>
        </svg>
      </div>
    );
  }
}
// return <div className="fs-1 text-center">Shop shoes</div>;
