import React from "react";

const Articulo = () => (
  <section className="article-clean">
    <div className="container">
      <div className="row">
        <div className="col-lg-10 col-xl-8 offset-lg-1 offset-xl-2">
          <div className="intro">
            <h1 className="text-center">Your Wonderful Article Title</h1>
            <p className="text-center">
              <span className="by">by</span> <a href="#">Author Name</a>
              <span className="date">Sept 8th, 2016 </span>
            </p>
            <img className="img-fluid" src="assets/img/desk.jpg" />
          </div>
          <div className="text">
            <p>
              Sed lobortis mi. Suspendisse vel placerat ligula.{" "}
              <span
                style={{
                  textDecoration: "underline"
                }}
              >
                Vivamus
              </span>{" "}
              ac sem lac. Ut vehicula rhoncus elementum. Etiam quis tristique
              lectus. Aliquam in arcu eget velit pulvinar dictum vel in justo.
              Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
              posuere cubilia Curae.
            </p>
            <p>
              Praesent sed lobortis mi. Suspendisse vel placerat ligula. Vivamus
              ac lacus. <strong>Ut vehicula rhoncus</strong> elementum. Etiam
              quis tristique lectus. Aliquam in arcu eget velit{" "}
              <em>pulvinar dict</em> vel in justo. Vestibulum ante ipsum primis
              in faucibus orci luctus et ultrices posuere cubilia Curae.
            </p>
            <h2>Aliquam In Arcu </h2>
            <p>
              Suspendisse vel placerat ligula. Vivamus ac sem lac. Ut vehicula
              rhoncus elementum. Etiam quis tristique lectus. Aliquam in arcu
              eget velit pulvinar dictum vel in justo. Vestibulum ante ipsum
              primis in faucibus orci luctus et ultrices posuere cubilia Curae.
            </p>
            <figure className="figure d-block">
              <img className="figure-img" src="assets/img/beach.jpg" />
              <figcaption className="figure-caption">Caption</figcaption>
            </figure>
            <p>
              Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
              posuere cubilia Curae. Suspendisse vel placerat ligula. Vivamus ac
              sem lac. Ut vehicula rhoncus elementum. Etiam quis tristique
              lectus. Aliquam in arcu eget velit pulvinar dictum vel in justo.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Articulo;
