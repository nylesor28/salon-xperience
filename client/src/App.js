import { render } from "@testing-library/react";
import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Footer from "./components/Footer/index.js";
import Home from "./pages/Home";
import Clients from "./pages/Clients";
import Profile from "./pages/Profile";
import Stylist from "./pages/Stylist";
import Pricing from "./pages/Pricing";
import logo from "./assets/logo/sx1.png";
import Contact from "./pages/Contact.js";
import Admin from "./pages/Admin";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";
<div style={{ backgroundImage: "url(/assets/background.png)" }}></div>;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Salon Xperience",
      headerLinks: [
        { title: "Home", path: "/" },
        { title: "Profile", path: "/profile" },
        { title: "Stylist", path: "/stylist" },
        { title: "Contact", paht: "/contact" },
        { title: "Admin", paht: "/admin" },
      ],
      home: {
        title: "Jacqueline of all Trades",
        subTitle: "Ventures into Web development",
        subscript: "explorer my ventures below!",
      },
      profile: {
        title: "profile",
      },
      stylist: {
        title: "Resume",
      },
      pricing: {
        title: "Resume",
      },
      contact: {
        title: "Admin",
      },
      admin: {
        title: "Build the Universe Together",
      },
    };
  }
  render() {
    return (
      <Router>
        <Container className="p=0" fluid={true}>
          {/* <Navbar className="border-bottom" bg="transparent" expand="lg"> */}
          <Navbar className="border-bottom bg-blue-400" expand="lg">
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
                <Link
                  className="nav-link text-white font-bold text-lg hover:bg-gray-600 rounded-lg"
                  to="/"
                >
                  Home
                </Link>
                <Link
                  className="nav-link text-white font-bold text-lg hover:bg-gray-600 rounded-lg"
                  to="/profile"
                >
                  Profile
                </Link>
                <Link
                  className="nav-link text-white font-bold text-lg hover:bg-gray-600 rounded-lg"
                  to="/stylist"
                >
                  Stylist
                </Link>
                <Link
                  className="nav-link text-white font-bold text-lg hover:bg-gray-600 rounded-lg"
                  to="/pricing"
                >
                  Pricing
                </Link>
                <Link
                  className="nav-link text-white font-bold text-lg hover:bg-gray-600 rounded-lg"
                  to="/Contact"
                >
                  Contact
                </Link>
                <Link
                  className="nav-link text-white font-bold text-lg hover:bg-gray-600 rounded-lg"
                  to="/Admin"
                >
                  Admin
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
            path="/profile"
            exact
            render={() => <Profile title={this.state.profile.title} />}
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
          <Route
            path="/admin"
            exact
            render={() => <Admin title={this.state.admin.title} />}
          />

          <Footer></Footer>
        </Container>
      </Router>
    );
  }
}
export default App;
