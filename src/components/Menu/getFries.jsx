import React, { Component } from "react";
import Pene from "../../resources/images/8.jpg";
import Cheese from "../../resources/images/9.jpg";
import Pasta from "../../resources/images/7.jpg";
import Molto from "../../resources/images/10.jpg";

import { MDBRow, MDBCol } from "mdbreact";

class getFries extends Component {
  state = {
    images: [`${Pene}`, `${Cheese}`, `${Pasta}`, `${Molto}`],
    title: [
      "PENE SALMONE",
      "CHEESE BUTTER",
      "BOLOGNESE PASTA",
      "TAGLIATELLE MOLTO"
    ],
    prices: ["$5.99", "$15.99", "$25.99", "$35.99"]
  };

  showFries = () =>
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
        <MDBRow>{this.showFries()}</MDBRow>
      </div>
    );
  }
}

export default getFries;
