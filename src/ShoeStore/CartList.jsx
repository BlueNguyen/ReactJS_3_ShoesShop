import React, { Component } from "react";

export default class CartList extends Component {
  handleIncreaseQuantity = (id) => {
    this.props.handleIncreaseQuantity(id);
  };

  handleDecreaseQuantity = (id) => {
    this.props.handleDecreaseQuantity(id);
  };

  renderListCart = () => {
    return this.props.cartItems.map((item, index) => {
      return (
        <tr key={item.id}>
          <th scope="row">{index + 1}</th>
          <td>
            <img src={item.image} alt={item.name} style={{ width: "50px" }} />
          </td>
          <td>{item.name}</td>
          <td>{item.price}</td>
          <td>{item.description}</td>
          <td>
            <button
              className="btn btn-danger"
              onClick={() => {
                this.props.handleCartRemove(item.id);
              }}
            >

              <i className="fa fa-trash"></i>
            </button>
          </td>
          <td>
            <button
              className="btn btn-primary mr-2"
              onClick={() => this.handleDecreaseQuantity(item.id)}
            >
              -
            </button>
            <span className="mr-2">{item.quantity}</span>
            <button
              className="btn btn-primary"
              onClick={() => this.handleIncreaseQuantity(item.id)}
            >
              +
            </button>
          </td>
        </tr>
      );
    });
  };

  render() {
    return (
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">STT</th>
            <th scope="col">Image</th>
            <th scope="col">Name</th>
            <th scope="col">Price</th>
            <th scope="col">Description</th>
            <th>
              <button scope="col">
                <i className="fa fa-cog"></i>
              </button>
            </th>
          </tr>
        </thead>
        <tbody>{this.renderListCart()}</tbody>
        <tfoot>
          <tr>
            <th scope="col" colSpan="5">
              Thành tiền
            </th>
            <td>{this.props.totalAmount}$</td>
            <td></td>
          </tr>
          <tr>
            <td colSpan="6">
              <button
                className="btn btn-warning"
                onClick={this.props.handlePayment}
              >
                Thanh Toán
              </button>
            </td>
          </tr>
        </tfoot>
      </table>
    );
  }
}
