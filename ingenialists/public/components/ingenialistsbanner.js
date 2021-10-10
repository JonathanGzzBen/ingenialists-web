import React from "react";

class ingenialistsbanner extends React.Component {
  render() {
    return (
      <div className="container">
        <div id="jumbo-home" className="p-5 mb-4 bg-light round-3">
          <div className="container-fluid py-5">
            <h1
              className="display-5 fw-bold"
              style={{
                color: "rgb(255,255,255)"
              }}
            >
              Ingenialists
            </h1>
            <p
              className="col-md-8 fs-4"
              style={{
                color: "rgb(255,255,255)"
              }}
            >
              Todo para ingenieros
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default ingenialistsbanner;
