import React from "react";

const SignUp = () => (
  <section className="register-photo">
    <div className="form-container">
      <div className="image-holder" />
      <form method="post">
        <h2 className="text-center">Cree su cuenta</h2>
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
          <input
            className="form-control"
            type="password"
            name="password-repeat"
            placeholder="Contrase\xF1a (confirmaci\xF3n)"
          />
        </div>
        <div className="mb-3">
          <div className="form-check">
            <label className="form-check-label">
              <input className="form-check-input" type="checkbox" />
              Estoy de acuerdo con los términos y condiciones
            </label>
          </div>
        </div>
        <div className="mb-3">
          <button className="btn btn-primary d-block w-100" type="submit">
            Sign Up
          </button>
        </div>
        <a className="already" href="log-in.html">
          ¿Ya tiene una cuenta? Inicie sesion aquí.
        </a>
      </form>
    </div>
  </section>
);

export default SignUp;
