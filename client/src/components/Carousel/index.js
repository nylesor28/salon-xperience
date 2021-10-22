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
      <div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-6">
              <h1 className="justify-content-center py-5">Stylist Gallery</h1>
            </div>
          </div>
          <div className="row">
            <div className="col-6">
              <Carousel className="justify-content-center py5">
                <Carousel.Item Interval={500}>
                  <img
                    className="d-block w-100"
                    src={angelopantazis}
                    width="417"
                    height="600"
                    text="Akeem"
                    alt="Akeem"
                  />
                  <Carousel.Caption>
                    <h3
                      classname="title"
                      style={{
                        color: "silver",
                        display: "flex",
                        textAlign: "center",
                        justifyContent: "center",
                      }}
                    >
                      Akeem
                    </h3>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item Interval={500}>
                  <img
                    className="d-block w-100"
                    src={brookecagle}
                    width="417"
                    height="600"
                    text="Emilia"
                    alt="Emilia"
                  />
                  <Carousel.Caption>
                    <h3
                      classname="title"
                      style={{
                        color: "silver",
                        display: "flex",
                        textAlign: "center",
                        justifyContent: "center",
                      }}
                    >
                      Emilia
                    </h3>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item Interval={500}>
                  <img
                    className="d-block w-100"
                    src={erikmclean}
                    width="417"
                    height="600"
                    text="Eva"
                    alt="Eva"
                  />
                  <Carousel.Caption>
                    <h3
                      classname="title"
                      style={{
                        color: "silver",
                        display: "flex",
                        textAlign: "center",
                        justifyContent: "center",
                      }}
                    >
                      Eva
                    </h3>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item Interval={500}>
                  <img
                    className="d-block w-100"
                    src={joelvalve}
                    width="417"
                    height="600"
                    text="Jurnee"
                    alt="Jurnee"
                  />
                </Carousel.Item>
                <Carousel.Caption>
                  <h3
                    classname="title"
                    style={{
                      color: "silver",
                      display: "flex",
                      textAlign: "center",
                      justifyContent: "center",
                    }}
                  >
                    Jurnee
                  </h3>
                </Carousel.Caption>
                <Carousel.Item Interval={500}>
                  <img
                    className="d-block w-100"
                    src={tammieallen}
                    width="417"
                    height="600"
                    text="Maya"
                    alt="Maya"
                  />
                  <Carousel.Caption>
                    <h3
                      classname="title"
                      style={{
                        color: "silver",
                        display: "flex",
                        textAlign: "center",
                        justifyContent: "center",
                      }}
                    >
                      Maya
                    </h3>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item Interval={500}>
                  <img
                    className="d-block w-100"
                    src={tylernix}
                    width="417"
                    height="600"
                    text="Roz"
                    alt="Roz"
                  />
                  <Carousel.Caption>
                    <h3
                      classname="title"
                      style={{
                        color: "silver",
                        display: "flex",
                        textAlign: "center",
                        justifyContent: "center",
                      }}
                    >
                      Roz
                    </h3>
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
