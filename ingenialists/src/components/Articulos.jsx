import React from "react";

const Articulos = () => (
  <section className="article-list">
    <div className="container">
      <div className="intro">
        <h2 className="text-center">Artículos recientes</h2>
        <p className="text-center">
          ¿Buscas algo en específico? Realiza tu búsqueda o navega por las
          categorías disponibles en la barra de navegación.
        </p>
      </div>
      <div className="row">
        <div className="col">
          <div className="row pt-5">
            <div className="col-md-10 offset-md-1">
              <div
                className="card m-auto"
                style={{
                  maxWidth: "850px"
                }}
              >
                <div className="card-body">
                  <form className="d-flex align-items-center">
                    <i className="fas fa-search d-none d-sm-block h4 text-body m-0" />
                    <input
                      className="form-control form-control-lg flex-shrink-1 form-control-borderless"
                      type="search"
                      placeholder="Search topics or keywords"
                      name="searchbar"
                    />
                    <button
                      className="btn btn-success btn-lg"
                      type="submit"
                      style={{
                        color: "rgb(255, 255, 255)",
                        background: "#56c6c6"
                      }}
                    >
                      Search
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
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

export default Articulos;
