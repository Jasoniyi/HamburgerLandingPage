import React, { Component } from "react";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBNavbarToggler,
  MDBCollapse,
  MDBIcon,
  MDBRow,
  MDBCol,
  MDBContainer
} from "mdbreact";
import { BrowserRouter as Router } from "react-router-dom";

class Home extends Component {
  state = {
    isOpen: false
  };

  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    return (
      <div className="home-wrapper">
        <div className="layer">
          {/* menu starts here */}
          <Router>
            <MDBNavbar color="transparent" light expand="md">
              <MDBNavbarBrand>
                <strong className="white-text">Navbar</strong>
              </MDBNavbarBrand>
              <MDBNavbarToggler
                onClick={this.toggleCollapse}
                className="toggle"
              />
              <MDBCollapse
                id="navbarCollapse3"
                isOpen={this.state.isOpen}
                navbar
              >
                <MDBNavbarNav right className="">
                  <MDBNavItem active className="mx-3">
                    <MDBNavLink to="#!">Home</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem className="mx-3">
                    <MDBNavLink to="#!">About</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem className="mx-3">
                    <MDBNavLink to="#!">Menu</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem className="mx-3">
                    <MDBNavLink to="#!">Service</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem className="mx-3">
                    <MDBNavLink to="#!">Gallery</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem className="mx-3">
                    <MDBNavLink to="#!">Reviews</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem className="mx-3">
                    <MDBNavLink to="#!">Contact</MDBNavLink>
                  </MDBNavItem>
                </MDBNavbarNav>
              </MDBCollapse>
            </MDBNavbar>
          </Router>
          {/* menu ends here */}

          {/* header title starts here */}
          <div className="header-title">
            <h1>BURGER SPECIAL</h1>
            <button>read more</button>
          </div>

          {/* social icons starts here */}
          <div className="social">
            <div className="social-icons ">
              <ul>
                <li>
                  <a href="#">
                    <MDBIcon
                      fab
                      size="lg"
                      className="white-text mx-3 my-2"
                      icon="facebook-square"
                    />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <MDBIcon
                      fab
                      size="lg"
                      className="white-text mx-3 my-2"
                      icon="twitter"
                    />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <MDBIcon
                      fab
                      size="lg"
                      className="white-text mx-3 my-2"
                      icon="google-plus-g"
                    />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <MDBIcon
                      fab
                      size="lg"
                      className="white-text mx-3 my-2"
                      icon="linkedin-in"
                    />
                  </a>
                </li>
              </ul>
            </div>

            <div className="order-now ml-5">
              <MDBIcon
                icon="phone"
                flip="horizontal"
                className="white-text mx-3 my-2"
              />
              <h3 className="my-1">Order now: 12343568</h3>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
