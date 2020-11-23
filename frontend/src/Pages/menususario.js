import React from "react";
class Menusuario extends React.Component {
  render() {
    return (
      <div className="container-fluid fondo">
        <div className="row">
          <div className="col-sm-4 col-md-4 col-lg-4"></div>
          <div className="col-sm-4 col-md-4 col-lg-4">
            <div className="row">
              <div className="col-lg-12 a">
                <br />
                <h1>Menu usuario </h1>
                <br />

                <h3>Isabella te lo vende </h3>
                <br />
                <br />
                <br />
                <div className="a">
                  <a href="/admiproducto"> Administrar tus productos </a>
                  <br />
                  <a href="/nuevoproducto"> Adicionar producto al catalogo </a>
                </div>
                <br />
                <br />
                <div className="col">
                  <button className="btn btn-outline-dark boton">
                    <a href="/iniciosesion">Cerrar sesión como usuario </a>
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

export default Menusuario;
