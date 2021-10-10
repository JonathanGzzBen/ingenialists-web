import React from "react";

class header extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-light navbar-expand-md navigation-clean-button">
        <div className="container">
          <a className="navbar-brand" href="index.html">
            Ingenialists
          </a>
          <button
            data-bs-toggle="collapse"
            className="navbar-toggler"
            data-bs-target="#navcol-1"
          >
            <span className="visually-hidden">Toggle navigation</span>
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navcol-1">
            <ul className="navbar-nav me-auto">
              <li className="nav-item" />
              <li className="nav-item">
                <a className="nav-link" href="articulos.html">
                  Artículos
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="dropdown-toggle nav-link"
                  aria-expanded="false"
                  data-bs-toggle="dropdown"
                  href="#"
                >
                  Categorías 
                </a>
                <div className="dropdown-menu">
                  <a className="dropdown-item" href="categoria.html">
                    First Item
                  </a>
                  <a className="dropdown-item" href="#">
                    Second Item
                  </a>
                  <a className="dropdown-item" href="#">
                    Third Item
                  </a>
                </div>
              </li>
            </ul>
            <span className="navbar-text actions">
              {" "}
              <a className="login" href="log-in.html">
                Log In
              </a>
              <a
                className="btn btn-light action-button"
                role="button"
                href="sign-up.html"
              >
                Sign Up
              </a>
            </span>
          </div>
        </div>
      </nav>
    );
  }
}

export default header;
