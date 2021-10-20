import { render } from "@testing-library/react";
import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Footer from "./components/Footer/index.js";
import Home from "./pages/Home";
import Clients from "./pages/Clients";
import Stylist from "./pages/Stylist";
import Pricing from "./pages/Pricing";
import logo from "./assets/logo/sx1.png";
import Contact from "./pages/Contact.js";
import "./App.css";
import"bootstrap/dist/css/bootstrap.css";
import axios from "axios";
<div style={{backgroundImage:"url(/assets/background.png)"}}></div>

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Salon Xperience",
      headerLinks: [
        { title: "Home", path: "/" },
        { title: "Clients", path: "/clients" },
        { title: "Stylist", path: "/stylist" },
        { title: "Contact", paht: "/contact" },
      ],
      home: {
        title: "Jacqueline of all Trades",
        subTitle: "Ventures into Web development",
        subscript: "explorer my ventures below!",
      },
      clients: {
        title: "Resume",
      },
      stylist: {
        title: "Resume",
      },
      pricing: {
        title: "Resume",
      },
      contact: {
        title: "Build the Universe Together",
      },
    };
  }
  render() {
    return (
      <Router>
        <Container className="p=0" fluid={true}>
          {/* <Navbar className="border-bottom" bg="transparent" expand="lg"> */}
          <Navbar className="border-bottom" expand="lg">
            <Navbar.Brand href="#home">
              <img
                src={logo}
                width="100"
                height="100"
                className="d-inline-block align-top"
                alt="logo"
              />
            </Navbar.Brand> 
            {/* <Navbar.Brand>Salon Xperience</Navbar.Brand> */}
            <Navbar.Toggle className="border=0" aria-controls="navbar-toggle" />
            <Navbar.Collapse id="navbar-toggle">
              <Nav className="ml-auto">
                <Link className="nav-link" to="/">
                  Home
                </Link>
                <Link className="nav-link" to="/clients">
                  Clients
                </Link>
                <Link className="nav-link" to="/stylist">
                  Stylist
                </Link>
                <Link className="nav-link" to="/pricing">
                  Pricing
                </Link>
                <Link className="nav-link" to="/Contact">
                  Contact
                </Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          <Route
            path="/"
            exact
            render={() => (
              <Home
                title={this.state.home.title}
                subTitle={this.state.home.subTitle}
                subscript={this.state.home.subscript}
              />
            )}
          />
          <Route
            path="/clients"
            exact
            render={() => <Clients title={this.state.clients.title} />}
          />
          <Route
            path="/stylist"
            exact
            render={() => <Stylist title={this.state.stylist.title} />}
          />
           <Route
            path="/pricing"
            exact
            render={() => <Pricing title={this.state.pricing.title} />}
          />
          <Route
            path="/contact"
            exact
            render={() => <Contact title={this.state.contact.title} />}
          />

          <Footer></Footer>
        </Container>
      </Router>
    );
  }
}
export default App;
