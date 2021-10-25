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
                    alt="First slide"
                  />
                  <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>
                      Nulla vitae elit libero, a pharetra augue mollis interdum.
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={erikmclean}
                    alt="Second slide"
                  />

                  <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={erikmclean}
                    alt="Third slide"
                  />

                  <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>
                      Praesent commodo cursus magna, vel scelerisque nisl
                      consectetur.
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
