import React from "react";
class Menuadmi extends React.Component {
  render() {
    return (
      <div className="container-fluid fondo">
        <div className="row">
          <div className="col-sm-4 col-md-4 col-lg-4"></div>
          <div className="col-sm-4 col-md-4 col-lg-4">
            <div className="row">
              <div className="col-lg-12 a">
                <br />
                <h1>Menu administrador </h1>
                <br />

                <h3>Isabella te lo vende </h3>
                <br />
                <br />
                <br />
                <div className="a">
                  <a href="/admiusuarios"> Administrar usuarios</a>
                  <br />
                  <a href="/admiclientes"> Administrar clientes</a>
                </div>
                <br />
                <br />
                <div className="col">
                  <button className="btn btn-outline-dark boton">
                    <a href="/iniciosesion">Cerrar sesión como adminustrador</a>
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

export default Menuadmi;
