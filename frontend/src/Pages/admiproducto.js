import React from "react";
class Admiproducto extends React.Component {
  render() {
    return (
      <div className="container-fluid fondo">
        <div className="row">
          <div className="col-sm-4 col-md-4 col-lg-4"></div>
          <div className="col-sm-4 col-md-4 col-lg-4">
            <div className="row">
              <div className="col-lg-12 a">
                <br />
                <br />
                <h1> Administra tus productos </h1>
                <br />
                <br />
                <h3>Loción Paco Rabanne Masculina</h3>
                <br />
                <br />
                <h5>
                  Subido hoy a las 17:30 <br />
                  El 20 de agosto del 2020 <br />
                  Estado: En venta
                </h5>
                <br />
                <br />

                <div className="col">
                  <button type="button" className="btn btn-outline-dark boton">
                    <a href="/menusuario">Salir</a>
                  </button>
                </div>
                <br />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Admiproducto;
