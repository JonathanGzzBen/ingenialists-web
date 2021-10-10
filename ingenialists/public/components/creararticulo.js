import React from "react";

class creararticulo extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h1 className="col-center-text">Crear Artículo</h1>
            <div className="row">
              <div className="col">
                <form>
                  <label className="form-label">Título</label>
                  <input
                    className="form-control"
                    type="text"
                    id="title"
                    placeholder="T\xEDtulo del art\xEDculo"
                    htmlFor="title"
                  />
                  <label className="form-label" htmlFor="category">
                    Categoría
                  </label>
                  <select className="form-select" id="category">
                    <optgroup label="This is a group">
                      <option value={12} selected>
                        This is item 1
                      </option>
                      <option value={13}>This is item 2</option>
                      <option value={14}>This is item 3</option>
                    </optgroup>
                  </select>
                  <div className="row">
                    <div className="col col-center-text">
                      <h3>Contenido</h3>
                    </div>
                    <div className="col col-center-text">
                      <h3>Previsualización</h3>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <textarea id="content-textarea" defaultValue={""} />
          </div>
          <div className="col-md-6" />
        </div>
        <section className="article-list">
          <div className="row">
            <div className="col col-center-text">
              <button
                className="btn btn-primary"
                id="create-article"
                type="button"
              >
                Publicar
              </button>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default creararticulo;
