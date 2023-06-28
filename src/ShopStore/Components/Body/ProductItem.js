import React, { Component } from "react";

export default class ProductItem extends Component {
  renderListProduc = () => {
    return this.props.item.map(
      ({ id, name, image, price, description, alias }) => {
        return (
          <div key={id} className="card col-4">
            <div
              className="card__content"
              onClick={() => {
                this.props.setStateModal("", "active");
              }}
            >
              <img
                className="card-img-top"
                src={image}
                alt=""
                data-bs-toggle="modal"
                data-bs-target={`#${alias}`}
              />
              <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">{price} $</p>
                <button className="glow-on-hover">Add to carts</button>
              </div>
            </div>

            {/* Modal */}
            <div
              className="modal fade"
              id={alias}
              tabIndex={-1}
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h1 className="modal-title fs-5" id="exampleModalLabel">
                      Infomation product
                    </h1>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                      onClick={() => {
                        this.props.setStateModal("active", "");
                      }}
                    />
                  </div>
                  <div className="modal-body">
                    <img
                      className="card-img-top btn"
                      src={image}
                      alt=""
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                    />
                    <div className="card-body">
                      <h5 className="card-title">{name}</h5>
                      <p className="card-text">{price} $</p>
                      <p className="card-text">{description}</p>
                    </div>
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-bs-dismiss="modal"
                      onClick={() => {
                        this.props.setStateModal("active", "");
                      }}
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      }
    );
  };
  render() {
    return this.renderListProduc();
  }
}
