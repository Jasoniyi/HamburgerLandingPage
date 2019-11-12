import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon } from "mdbreact";

import Footer from "./Footer";

const FormPage = () => {
  return (
    <div>
      <MDBContainer>
        <p className="h4 text-center py-4 my-4 contact-text">Contact Us</p>
        <form>
          <MDBRow>
            <MDBCol lg="4">
              <label
                htmlFor="defaultFormCardNameEx"
                className="grey-text font-weight-light"
              >
                Your name
              </label>
              <input
                type="text"
                id="defaultFormCardNameEx"
                className="form-control"
              />
            </MDBCol>
            <MDBCol lg="4">
              <label
                htmlFor="defaultFormCardEmailEx"
                className="grey-text font-weight-light"
              >
                Your email csfsfsa
              </label>
              <input
                type="email"
                id="defaultFormCardEmailEx"
                className="form-control"
              />
            </MDBCol>
            <MDBCol lg="4">
              <div className="text-center py-4">
                <MDBBtn className="btn contact-button" type="submit">
                  Send
                  <MDBIcon far icon="paper-plane" className="ml-2" />
                </MDBBtn>
              </div>
            </MDBCol>
          </MDBRow>
        </form>

        <div className="divider my-5"></div>

        <MDBRow>
          <MDBCol lg="4">
            <div className="contact-info">
              <MDBIcon icon="map-marker-alt" size="2x" />
              <h5>
                LOCATION <br />
                The company name <br /> New York City.
              </h5>
            </div>
          </MDBCol>
          <MDBCol lg="4">
            <div className="contact-info">
              <MDBIcon far icon="envelope-open" size="2x" />
              <h5>
                EMAIL <br />
                mail@example.com <br /> mail@example.com.
              </h5>
            </div>
          </MDBCol>
          <MDBCol lg="4">
            <div className="contact-info">
              <MDBIcon icon="mobile-alt" size="2x" />
              <h5>
                PHONE NUMBER <br />
                + 1234567890 <br /> + 0987654321.
              </h5>
            </div>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <Footer />
    </div>
  );
};

export default FormPage;
