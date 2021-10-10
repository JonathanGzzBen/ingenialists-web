import React from "react";

const Footer = () => (
  <footer className="footer-basic">
    <div className="social">
      <a href="#">
        <i className="icon ion-social-instagram" />
      </a>
      <a href="#">
        <i className="icon ion-social-twitter" />
      </a>
      <a href="#">
        <i className="icon ion-social-facebook" />
      </a>
    </div>
    <ul className="list-inline">
      <li className="list-inline-item">
        <a href="#">Inicio</a>
      </li>
      <li className="list-inline-item">
        <a href="#">Artículos</a>
      </li>
      <li className="list-inline-item">
        <a href="#">Categorías</a>
      </li>
      <li className="list-inline-item">
        <a href="#">Licencias Open Source</a>
      </li>
      <li className="list-inline-item" />
    </ul>
    <p className="copyright">Ingenialists © 2021</p>
  </footer>
);

export default Footer;
