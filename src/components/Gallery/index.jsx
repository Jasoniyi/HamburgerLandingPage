import React from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import Lightbox from "react-image-lightbox";

import Gall1 from "../../resources/images/g1.jpg";
import Gall2 from "../../resources/images/g2.jpg";
import Gall3 from "../../resources/images/g3.jpg";
import Gall4 from "../../resources/images/g4.jpg";

class LightboxPage extends React.Component {
  state = {
    photoIndex: 0,
    isOpen: false,
    images: [`${Gall1}`, `${Gall2}`, `${Gall3}`, `${Gall4}`]
  };

  renderImages = () => {
    let photoIndex = -1;
    const { images } = this.state;

    return images.map(imageSrc => {
      photoIndex++;
      const privateKey = photoIndex;
      return (
        <MDBCol md="3" key={photoIndex}>
          <figure>
            <img
              src={imageSrc}
              alt="Gallery"
              className="img-fluid"
              onClick={() =>
                this.setState({ photoIndex: privateKey, isOpen: true })
              }
            />
          </figure>
        </MDBCol>
      );
    });
  };

  render() {
    const { photoIndex, isOpen, images } = this.state;
    return (
      <MDBContainer className="mt-5">
        <div className="lightbox-title">
          <h3>Our Gallery</h3>
        </div>
        <div className="mdb-lightbox">
          <MDBRow>{this.renderImages()}</MDBRow>
        </div>
        {isOpen && (
          <Lightbox
            mainSrc={images[photoIndex]}
            nextSrc={images[(photoIndex + 1) % images.length]}
            prevSrc={images[(photoIndex + images.length - 1) % images.length]}
            imageTitle={photoIndex + 1 + "/" + images.length}
            onCloseRequest={() => this.setState({ isOpen: false })}
            onMovePrevRequest={() =>
              this.setState({
                photoIndex: (photoIndex + images.length - 1) % images.length
              })
            }
            onMoveNextRequest={() =>
              this.setState({
                photoIndex: (photoIndex + 1) % images.length
              })
            }
          />
        )}
      </MDBContainer>
    );
  }
}

export default LightboxPage;
