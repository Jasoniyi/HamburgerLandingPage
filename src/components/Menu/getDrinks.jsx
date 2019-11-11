import React, { Component } from "react";
import Cola from "../../resources/images/11.jpg";
import Lime from "../../resources/images/12.jpg";

import { MDBRow, MDBCol } from "mdbreact";

class getFries extends Component {
  state = {
    images: [`${Cola}`, `${Lime}`, `${Cola}`, `${Lime}`],
    title: ["COLA BOTTLE", "FRESH LIME", "COLA BOTTLE", "KIWI SMOOTHIE"],
    prices: ["$5.99", "$15.99", "$25.99", "$35.99"]
  };

  showdrinks = () =>
    this.state.title.map((item, i) => (
      <MDBCol md="3" key={i} className="ab-content">
        <div className="burger-wrapper">
          <div className="burger-img">
            <img
              src={this.state.images[i]}
              alt="bugers"
              className="img-fluid"
            />
          </div>
          <div className="burger-text">
            <h3>{this.state.title[i]}</h3>
          </div>
          <div className="burger-price">
            <h3>{this.state.prices[i]}</h3>
          </div>
        </div>
      </MDBCol>
    ));

  render() {
    return (
      <div>
        <MDBRow>{this.showdrinks()}</MDBRow>
      </div>
    );
  }
}

export default getFries;
