import { render } from "@testing-library/react";
// import { ApolloProvider } from '@apollo/client';
// import ApolloClient from 'apollo-boost';
import { setContext } from "@apollo/client/link/context";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Footer from "./components/Footer/index.js";
import Home from "./pages/Home";
import Detail from './pages/Detail';
import Clients from "./pages/Clients";
import Stylist from "./pages/Stylist";
import Pricing from "./pages/Pricing";
import Profile from "./pages/Profile";
import logo from "./assets/logo/sx1.png";
import Contact from "./pages/Contact.js";
import Admin from "./pages/Admin";
import SignUp from "./pages/Signup";
import Login from "./pages/Login";
import "./App.css";
import"bootstrap/dist/css/bootstrap.css";
// import axios from "axios";
import { StoreProvider } from './utils/GlobalState';

import Auth from "./utils/auth.js";
// const client = new ApolloClient({ request: operation => {
//   const token = localStorage.getItem('id_token');

//   operation.setContext({
//     headers: {
//       authorization: token ? `Bearer ${token}` : ''
//     }
//   });
// },
//   uri: '/graphql'
// });
const logout = (event) => {
  event.preventDefault();
  Auth.logout();
};

{
  /* <div style={{ backgroundImage: "url(/assets/background.png)" }}></div>; */
}

  
const httpLink= createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});
const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),

});

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Salon Xperience",
      headerLinks: [
        { title: "Home", path: "/" },
        { title: "Profile", path: "/profile" },
        { title: "Stylist", path: "/stylist" },
        { title: "Contact", path: "/contact" },
        { title: "Admin", path: "/admin" },
        { title: "Login", path: "/login" },
        { title: "SignUp", path: "/signup" },
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
      profile: {
        title: "profile",
      },
      contact: {
        title: "Admin",
      },
      signup: {
        title: "signup",
      },
      login: {
        title: "login",
      },
      admin: {
        title: "Build the Universe Together",
      },
    };
  }

  render() {
    return (
      <ApolloProvider client={client}>
        <Router>
        <StoreProvider>
          <Container className="p=0" fluid={true}>
            {/* <Navbar className="border-bottom" bg="transparent" expand="lg"> */}
            <Navbar className="border-bottom bg-blue-400" expand="lg">
              <Navbar.Brand href="#home">
                <div className="w-60 h-24 pl-4">
                  <img
                    src={logo}
                    width="w-full"
                    height="w-full"
                    className="d-inline-block align-top"
                    alt="logo"
                  />
                </div>
              </Navbar.Brand>
              {/* <Navbar.Brand>Salon Xperience</Navbar.Brand> */}
              <Navbar.Toggle
                className="border=0"
                aria-controls="navbar-toggle"
              />
              <Navbar.Collapse id="navbar-toggle">
                <Nav className="ml-auto">
                  <Link
                    className="nav-link text-white font-bold text-2xl hover:bg-gray-600 rounded-lg"
                    to="/"
                  >
                    Home
                  </Link>

                  <Link
                    className="nav-link text-white font-bold text-2xl hover:bg-gray-600 rounded-lg"
                    to="/stylist"
                  >
                    Stylist
                  </Link>
                  <Link
                    className="nav-link text-white font-bold text-2xl hover:bg-gray-600 rounded-lg"
                    to="/pricing"
                  >
                    Pricing
                  </Link>
                  <Link
                    className="nav-link text-white font-bold text-2xl hover:bg-gray-600 rounded-lg"
                    to="/Contact"
                  >
                    Contact
                  </Link>
                  {Auth.loggedIn() && Auth.isAdmin() ? (
                    <Link
                      className="nav-link text-white font-bold text-2xl hover:bg-gray-600 rounded-lg"
                      to="/Admin"
                    >
                      Admin
                    </Link>
                  ) : null}

                  {Auth.loggedIn() ? (
                    <>
                      <Link
                        className="nav-link text-white font-bold text-2xl hover:bg-gray-600 rounded-lg"
                        to="/profile"
                      >
                        Profile
                      </Link>
                      <Link to="/" className="text-white mr-2 bg-red-400 border-2 text-xl hover:bg-red-800 rounded-full">
                      <button className="font-bold p-1" onClick={logout}>
                        Logout
                      </button>
                      </Link>
                    </>
                  ) : (
                    <>
                      <Link
                        className="nav-link text-white font-bold text-2xl hover:bg-gray-600 rounded-lg"
                        to="/login"
                      >
                        Login
                      </Link>
                      <Link
                        className="nav-link text-white font-bold text-2xl hover:bg-gray-600 rounded-lg"
                        to="/signup"
                      >
                        Signup
                      </Link>
                    </>
                  )}

                  {/* <Link
                    className="nav-link text-white font-bold text-2xl hover:bg-gray-600 rounded-lg"
                    to="/profile"
                  >
                    Profile
                  </Link>
                  <Link
                    className="nav-link text-white font-bold text-2xl hover:bg-gray-600 rounded-lg"
                    to="/signup"
                  >
                    Sign Up
                  </Link>
                  <Link
                    className="nav-link text-white font-bold text-2xl hover:bg-gray-600 rounded-lg"
                    to="/login"
                  >
                    Login
                  </Link> */}
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
            <Route
              path="/signup"
              exact
              render={() => <SignUp title={this.state.signup.title} />}
            />
            <Route
              path="/login"
              exact
              render={() => <Login title={this.state.login.title} />}
            />

            <Footer></Footer>
          </Container>
          </StoreProvider>
        </Router>
      </ApolloProvider>
    );
  }
}
export default App;
