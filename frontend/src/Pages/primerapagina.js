import React from "react"
import carritodecompra from "../Imagenes/107831.png"
import "../Style/style.css"
import Swal from "sweetalert2"

class PrimeraPagina extends React.Component{
  _Alerta(){
    Swal.fire("Ingreso exitoso", "Redireccionando a la pantalla de Inicio Sesion")
  }
  render(){
    return(
      <div className="container">
  <div className="row">
    <div className="col-sm-4 col-md-4 col-lg-4"></div>
    <div className="col-sm-4 col-md-4 col-lg-4">
      <div className="row">
        <div class ="elementoPrimeraPagina"><h1>Isabella te lo vende</h1></div>
        

        <div className= "col">
        <img src={carritodecompra} className="rounded mx-auto d-block carritoDeCompra" alt="..."/>
        </div>



      </div>
      <button onClick = {this._Alerta}
       type="button" className="btn btn-primary btn-lg"><a href="iniciosesion">Ingresar</a>
       </button>
    </div>
    <div className="col-sm-4 col-md-4 col-lg-4"></div>
  </div>
</div>
    )
  }
}


export default PrimeraPagina