import React from "react";

const Login = () => (
  <section className="login-clean">
    <form method="post">
      <h2 className="visually-hidden">Login Form</h2>
      <div className="illustration">
        <i className="icon ion-ios-navigate" />
      </div>
      <div className="mb-3">
        <input
          className="form-control"
          type="email"
          name="email"
          placeholder="Email"
        />
      </div>
      <div className="mb-3">
        <input
          className="form-control"
          type="password"
          name="password"
          placeholder="Contrase\xF1a"
        />
      </div>
      <div className="mb-3">
        <button className="btn btn-primary d-block w-100" type="submit">
          Ingresar
        </button>
      </div>
      <a className="forgot" href="#">
        ¿Olvidó su contraseña? 
      </a>
    </form>
  </section>
);

export default Login;
