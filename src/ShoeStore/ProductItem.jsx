import React, { Component } from "react";

export default class ProductItem extends Component {
  render() {
    let { id, image, name, price } = this.props.data;
    return (
      <div className="col-3 d-flex mb-4 ">
        <div
          className="card w3-container w3-animate-opacity"
          style={{ width: "18rem" }}
        >
          <img className="w-80" src={image} alt="" />
          <div className="card-body d-flex flex-column justify-content-around">
            <h5 className="card-title">{name}</h5>
            <h3 className="text-primary">{price}$</h3>
            <button
              className="btn btn-success mb-2"
              onClick={() => {
                this.props.handleCartAdd(this.props.data);
              }}
            >
              Add To Cart <i className="fa fa-shopping-cart"></i>
            </button>
            
            <button
              data-toggle="modal"
              data-target="#shoeModal"
              className="btn btn-warning"
              onClick={() => {
                this.props.handleClickView(this.props.data);
              }}
            >
              View
            </button>
          </div>
        </div>
      </div>
    );
  }
}
