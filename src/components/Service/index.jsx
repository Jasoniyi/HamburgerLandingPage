import React, { Component } from "react";

import Sandwich from "../../resources/images/1.jpg";
import Chips from "../../resources/images/2.jpg";
import Burgers from "../../resources/images/3.jpg";
import Veg from "../../resources/images/4.jpg";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";

class index extends Component {
  state = {
    titles: [
      "DELICIOUS SANDWICH",
      "HUMBURGER & CHIPS",
      "TWO BURGERS FOR ONE",
      "VEG MUFFIN"
    ],
    images: [`${Sandwich}`, `${Chips}`, `${Burgers}`, `${Veg}`],
    prices: ["$5.99", "$10.99", "$25.99", "$28.99"]
  };

  showServices = () =>
    this.state.titles.map((item, i) => (
      <MDBCol lg="3" key={i} className="service-content">
        <div className="service-img">
          <img src={this.state.images[i]} alt="foods" className="img-fluid" />
        </div>
        <div className="service-title">{this.state.titles[i]}</div>
        <div className="service-price">{this.state.prices[i]}</div>
      </MDBCol>
    ));

  render() {
    return (
      <div className="service-wrapper">
        <MDBContainer>
          <h3>What kind of foods we serve for you</h3>

          <MDBRow className="mt-4">{this.showServices()}</MDBRow>
        </MDBContainer>
      </div>
    );
  }
}

export default index;
