import React from "react";
import { MDBRow, MDBCol, MDBContainer } from "mdbreact";

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="review-layer">
        <div className="footer-info">
          <MDBContainer>
            <MDBRow>
              <MDBCol lg="4">
                <div className="footer-logo">
                  <p>
                    Donec consequat sam libero tempore, cum soluta nobis est
                    eligendi optio cumque nihil impedit quo minus
                  </p>
                  <p>
                    Id quod possimusapien ut leo cursus rhoncus. Nullam dui mi,
                    vulputate ac metus at, semper varius orci.
                  </p>
                </div>
              </MDBCol>
              <MDBCol lg="4">
                <div className="footer-opening-hours">
                  OPENING HOURS
                  <div className="divider" />
                  <ul>
                    <li>
                      Monday - Friday 08.00 am - 10.00 pm
                      <span>
                        <div className="divider"></div>
                      </span>
                    </li>
                    <li>
                      Saturday 08.00 am - 10.00 pm
                      <span>
                        <div className="divider"></div>
                      </span>
                    </li>
                    <li>
                      Sunday 08.00 am - 10.00 pm
                      <span>
                        <div className="divider"></div>
                      </span>
                    </li>
                  </ul>
                </div>
              </MDBCol>
              <MDBCol lg="4">
                <div className="footer-contact">
                  CONTACT US
                  <div className="divider" />
                  <div className="lists">
                    <div className="email my-3">info@example.com</div>
                    <div className="phone mb-3">+ 456 123 7890</div>
                    <div className="address">
                      + 90 nsequursu dsdesdc, <br />
                      xxx Honey State 049436.
                    </div>
                  </div>
                </div>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </div>
        <div className="footer-copyright">
          © 2019 Humburger. All Rights Reserved | Re-design by me
        </div>
      </div>
    </div>
  );
};

export default Footer;
