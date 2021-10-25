import React from "react";
import angelopantazis from "./../../assets/carousel/angelopantazis.jpg";
import brookecagle from "./../../assets/carousel/erikmclean.jpg";
import erikmclean from "./../../assets/carousel/brookecagle.jpg";
import joelvalve from "./../../assets/carousel/joelvalve.jpg";
import tammieallen from "./../../assets/carousel/tammieallen.jpg";
import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel } from "react-bootstrap";
import tylernix from "./../../assets/carousel/tylernix.jpg";
class BootstrapCarouselComponent extends React.Component {
  render() {
    return (
      <div className="p-2">
        <div className="container-fluid">
          <div className="row flex justify-center w-full">
            <div className="col-6 border-2 p-2 shadow-md">
              <Carousel>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={brookecagle}
                    alt="Roz"
                  />
                  <Carousel.Caption>
                    <h3>Roz</h3>
                    <p>
                     Summer Evening Wedding
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={erikmclean}
                    alt="Akeem"
                  />

                  <Carousel.Caption>
                    <h3>Akeem</h3>
                    <p>
                      Casual Stroll through the city
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={angelopantazis}
                    alt="Emilia"
                  />

                  <Carousel.Caption>
                    <h3>Emilia</h3>
                    <p>
                      Evening Beach Outdoor Wedding
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={joelvalve}
                    alt="Eva"
                  />

                  <Carousel.Caption>
                    <h3>Eva</h3>
                    <p>
                     Natural Queen
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={tammieallen}
                    alt="Jurnee"
                  />

                  <Carousel.Caption>
                    <h3>Jurnee</h3>
                    <p>
                      Quiet Feiry
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
              <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={tylernix}
                    alt="Maya"
                  />

                  <Carousel.Caption>
                    <h3>Maya</h3>
                    <p>
                      The natural leader
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
                </Carousel>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BootstrapCarouselComponent;