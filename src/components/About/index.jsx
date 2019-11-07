import React from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import Pic from "../../resources/images/ab1.png";

const index = () => {
  return (
    <div className="about-wrapper">
      <MDBContainer>
        <MDBRow className="mt-5">
          <MDBCol md="6">
            <div className="about-text mt-4">
              <h3>
                Triple Hamburger with cheese <br /> meal
              </h3>
              <p>
                Integer pulvinar leo id viverra feugiat.
                <strong>
                  {" "}
                  Pellentesque Libero Justo, Semper At Tempus Vel, Ultrices In
                  Sed Ligula. Nulla Uter Sollicitudin Velit.
                </strong>{" "}
                Sed porttitor orci vel fermentum elit maximus. Curabitur ut
                turpis massa in condimentum libero. Pellentesque maximus
                Pellentesque libero justo Nulla uter sollicitudin velit. Sed
                porttitor orci vel ferm semper at vel, ultrices in ligula semper
                at vel.Curabitur ut turpis massa in condimentum libero.
              </p>
            </div>
          </MDBCol>
          <MDBCol md="6">
            <div className="about-img">
              <img src={Pic} alt="burger" className="img-fluid burger-img" />
            </div>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
};

export default index;
