import React from "react";

const RecuperacionDeCuenta = () => (
  <section className="register-photo">
    <div className="form-container">
      <div className="image-holder" />
      <form method="post">
        <h2 className="text-center">Recuperación de cuenta</h2>
        <div className="mb-3">
          <input
            className="form-control"
            type="email"
            name="email"
            placeholder="Email"
          />
        </div>
        <div className="mb-3" />
        <div className="mb-3" />
        <div className="mb-3" />
        <div className="mb-3">
          <button className="btn btn-primary d-block w-100" type="submit">
            Enviar correo de recuperación
          </button>
        </div>
      </form>
    </div>
  </section>
);

export default RecuperacionDeCuenta;
