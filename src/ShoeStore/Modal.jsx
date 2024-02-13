import React, { Component } from "react";

export default class Modal extends Component {
  render() {
    
    return (
      <div>
        <div
          class="modal fade"
          id="shoeModal"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5
                  class="modal-title font-weight-bolder"
                  id="exampleModalLabel"
                >
                  {this.props.detailModal.name}
                </h5>
                <button
                  type="button"
                  class="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div>
                <div className="card text-align-center">
                  <div className="card-body ">
                    <img
                      src={this.props.detailModal.image}
                      className="card-img-top"
                      style={{ width: "80%" }}
                      alt={this.props.detailModal.name}
                    />
                    <h3 className="text-center font-weight-bolder text-danger">
                      Price: {this.props.detailModal.price}$
                    </h3>
                    <h4 className="text-center text-primary">
                      Quantity: {this.props.detailModal.quantity}
                    </h4>
                    <p className="card-text">
                      {this.props.detailModal.description}
                    </p>
                  </div>
                </div>
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-danger"
                  data-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" class="btn btn-success">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
