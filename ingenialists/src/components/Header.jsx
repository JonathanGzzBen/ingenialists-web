import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Home";
import Articulos from "./Articulos";
import Categorias from "./Categorias";
import Login from "./Login";
import SignUp from "./SignUp";

const Header = () => (
  <Router>
    <nav className="navbar navbar-light navbar-expand-md navigation-clean-button">
      <div className="container">
        <Link to="/" className="navbar-brand">
          Ingenialists
        </Link>
        <button
          data-bs-toggle="collapse"
          className="navbar-toggler"
          data-bs-target="#navcol-2"
        >
          <span className="visually-hidden">Toggle navigation</span>
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navcol-2">
          <ul className="navbar-nav me-auto">
            <li className="nav-item" />
            <li className="nav-item">
              <Link className="nav-link" to="/articulos">
                Artículos
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/categorias">
                Categorías
              </Link>
            </li>
          </ul>
          <span className="navbar-text actions">
            {" "}
            <Link className="login" to="/login">
              Log In
            </Link>
            <Link
              className="btn btn-light action-button"
              role="button"
              to="/signup"
            >
              Sign Up
            </Link>
          </span>
        </div>
      </div>
    </nav>
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/articulos">
        <Articulos />
      </Route>
      <Route path="/categorias">
        <Categorias />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/signup">
        <SignUp />
      </Route>
    </Switch>
  </Router>
);

export default Header;
