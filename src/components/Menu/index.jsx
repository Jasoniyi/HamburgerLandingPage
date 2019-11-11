import React, { Component } from "react";
import {
  MDBContainer,
  MDBTabPane,
  MDBTabContent,
  MDBNav,
  MDBNavItem,
  MDBNavLink,
  MDBIcon
} from "mdbreact";

import { BrowserRouter as Router } from "react-router-dom";
import GetBurgers from "./getBurgers";
import GetFries from "./getFries";
import GetDrinks from "./getDrinks";

class Menu extends Component {
  state = {
    activeItem: "1"
  };

  toggle = tab => e => {
    if (this.state.activeItem !== tab) {
      this.setState({
        activeItem: tab
      });
    }
  };

  render() {
    return (
      <div>
        <div className="menu-wrapper">
          <h3>bigger & bolder</h3>

          <div className="menu-tab">
            <Router>
              <MDBContainer>
                <MDBNav className="nav-tabs mt-5 menu-tabname">
                  <MDBNavItem>
                    <MDBNavLink
                      to="#"
                      active={this.state.activeItem === "1"}
                      onClick={this.toggle("1")}
                      role="tab"
                      className="menu-tabnav"
                    >
                      BURGERS
                    </MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink
                      to="#"
                      active={this.state.activeItem === "2"}
                      onClick={this.toggle("2")}
                      role="tab"
                      className="menu-tabnav"
                    >
                      FRIES
                    </MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink
                      to="#"
                      active={this.state.activeItem === "3"}
                      onClick={this.toggle("3")}
                      role="tab"
                      className="menu-tabnav"
                    >
                      DRINKS
                    </MDBNavLink>
                  </MDBNavItem>
                </MDBNav>
                <MDBTabContent activeItem={this.state.activeItem}>
                  <MDBTabPane tabId="1" role="tabpanel">
                    <GetBurgers />
                  </MDBTabPane>
                  <MDBTabPane tabId="2" role="tabpanel">
                    <GetFries />
                  </MDBTabPane>
                  <MDBTabPane tabId="3" role="tabpanel">
                    <GetDrinks />
                  </MDBTabPane>
                </MDBTabContent>
              </MDBContainer>
            </Router>
          </div>
        </div>

        <div className="delivery-wrapper">
          <h3>
            Free delivery with <br /> <span>Burger of the day</span>
          </h3>
          <div className="day-price my-3">
            <div className="price">
              <h2>$99</h2>
            </div>
            <div className="price-info ml-2">
              <ul>
                <li>
                  <MDBIcon
                    icon="long-arrow-alt-right"
                    size="lg"
                    className="mr-3 arrow-icon"
                  />
                  Integer sit amet mattis quam
                </li>
                <li>
                  <MDBIcon
                    icon="long-arrow-alt-right"
                    size="lg"
                    className="mr-3 arrow-icon"
                  />
                  Praesent ullamcorper dui turpis
                </li>
                <li>
                  <MDBIcon
                    icon="long-arrow-alt-right"
                    size="lg"
                    className="mr-3 arrow-icon"
                  />
                  Integer sit amet mattis quam
                </li>
              </ul>
            </div>
          </div>
          <button>Read more</button>
        </div>
      </div>
    );
  }
}

export default Menu;
