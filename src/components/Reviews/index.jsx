import React from "react";
import { MDBIcon } from "mdbreact";

const index = () => {
  return (
    <div className="reviews-wrapper">
      <div className="review-layer">
        <div className="review-info ">
          <h3 className="review-text">JENIFER BURNS</h3>
        </div>
        <div className="review-rating">
          <MDBIcon icon="star" />
          <MDBIcon icon="star" />
          <MDBIcon icon="star" />
          <MDBIcon icon="star-half" />
        </div>
        <div className="review-comment">
          <p>
            Lorem Ipsum has been the industry's standard since the 1500s.
            Praesent ullamcorper <br /> dui turpis.Nulla pellentesque mi non
            laoreet eleifend. Integer porttitor mollisar lorem, at <br />{" "}
            molestie arcu pulvinar ut.
          </p>
        </div>
      </div>
    </div>
  );
};

export default index;
