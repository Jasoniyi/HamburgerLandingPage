import React, { Component } from "react";
import Bacon from "../../resources/images/5.jpg";
import Butter from "../../resources/images/6.jpg";
import Sandwich from "../../resources/images/7.jpg";
import { MDBRow, MDBCol } from "mdbreact";

class getBurgers extends Component {
  state = {
    images: [`${Bacon}`, `${Butter}`, `${Sandwich}`, `${Bacon}`],
    title: [
      "BACON BURGER",
      "CHEESE BUTTER",
      "DELIIOUS SANDWICH",
      "DELICIOUS SANDWICH"
    ],
    prices: ["$5.99", "$15.99", "$25.99", "$35.99"]
  };

  showBurgers = () =>
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
        <MDBRow>{this.showBurgers()}</MDBRow>
      </div>
    );
  }
}

export default getBurgers;
