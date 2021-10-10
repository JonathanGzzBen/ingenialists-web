import React from "react";

const Categoria = () => (
  <section className="article-list">
    <div className="container">
      <div className="intro">
        <h2 className="text-center">Software</h2>
        <p className="text-center">
          Aquí encontrarás todo tipo de artículos sobre software, desde
          tutoriales de programación, opiniones y configuraciones en Linux, o
          simplemente recomendaciones de software que te pueden facilitar la
          vida.
        </p>
      </div>
      <div className="row articles">
        <div className="col-sm-6 col-md-4 item">
          <a href="#">
            <img className="img-fluid" src="assets/img/desk.jpg" />
          </a>
          <h3 className="name">Article Title</h3>
          <p className="description">
            Aenean tortor est, vulputate quis leo in, vehicula rhoncus lacus.
            Praesent aliquam in tellus eu gravida. Aliquam varius finibus est,
            interdum justo suscipit id.
          </p>
          <a className="action" href="#">
            <i className="fa fa-arrow-circle-right" />
          </a>
        </div>
        <div className="col-sm-6 col-md-4 item">
          <a href="#">
            <img className="img-fluid" src="assets/img/building.jpg" />
          </a>
          <h3 className="name">Article Title</h3>
          <p className="description">
            Aenean tortor est, vulputate quis leo in, vehicula rhoncus lacus.
            Praesent aliquam in tellus eu gravida. Aliquam varius finibus est,
            interdum justo suscipit id.
          </p>
          <a className="action" href="#">
            <i className="fa fa-arrow-circle-right" />
          </a>
        </div>
        <div className="col-sm-6 col-md-4 item">
          <a href="#">
            <img className="img-fluid" src="assets/img/loft.jpg" />
          </a>
          <h3 className="name">Article Title</h3>
          <p className="description">
            Aenean tortor est, vulputate quis leo in, vehicula rhoncus lacus.
            Praesent aliquam in tellus eu gravida. Aliquam varius finibus est,
            interdum justo suscipit id.
          </p>
          <a className="action" href="#">
            <i className="fa fa-arrow-circle-right" />
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default Categoria;
