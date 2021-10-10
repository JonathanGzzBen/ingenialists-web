import React from "react";

const IngenialistsTeam = () => (
  <section className="team-clean">
    <div className="container">
      <div className="intro">
        <h2 className="text-center">Quiénes somos</h2>
        <p className="text-center">
          Somos un grupo de técnicos en distintas profesiones y estudiantes de
          ingeniería. Queremos compartir conocimiento y contenido interesante
          para personas que también están interesadas en la ingeniería.{" "}
        </p>
      </div>
      <div className="row people">
        <div className="col-md-6 col-lg-4 item">
          <img className="rounded-circle" src="assets/img/1.jpg" />
          <h3 className="name">JonathanGzzBen</h3>
          <p className="title">Software</p>
          <p className="description">
            Me gusta el software, paso mi tiempo libre probando distintas
            configuraciones de software en mi máquina de producción y en mi
            servidor local. I use Arch btw.
          </p>
          <div className="social">
            <a href="#">
              <i className="fa fa-facebook-official" />
            </a>
            <a href="#">
              <i className="fa fa-twitter" />
            </a>
            <a href="#">
              <i className="fa fa-instagram" />
            </a>
          </div>
        </div>
        <div className="col-md-6 col-lg-4 item">
          <img className="rounded-circle" src="assets/img/2.jpg" />
          <h3 className="name">VictorAncira</h3>
          <p className="title">administración</p>
          <p className="description">
            Aenean tortor est, vulputate quis leo in, vehicula rhoncus lacus.
            Praesent aliquam in tellus eu gravida. Aliquam varius finibus est,
            et interdum justo suscipit id. Etiam dictum feugiat tellus, a semper
            massa.{" "}
          </p>
          <div className="social">
            <a href="#">
              <i className="fa fa-facebook-official" />
            </a>
            <a href="#">
              <i className="fa fa-twitter" />
            </a>
            <a href="#">
              <i className="fa fa-instagram" />
            </a>
          </div>
        </div>
        <div className="col-md-6 col-lg-4 item">
          <img className="rounded-circle" src="assets/img/3.jpg" />
          <h3 className="name">Ugarte</h3>
          <p className="title">el master</p>
          <p className="description">
            Aenean tortor est, vulputate quis leo in, vehicula rhoncus lacus.
            Praesent aliquam in tellus eu gravida. Aliquam varius finibus est,
            et interdum justo suscipit id. Etiam dictum feugiat tellus, a semper
            massa.{" "}
          </p>
          <div className="social">
            <a href="#">
              <i className="fa fa-facebook-official" />
            </a>
            <a href="#">
              <i className="fa fa-twitter" />
            </a>
            <a href="#">
              <i className="fa fa-instagram" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default IngenialistsTeam;
