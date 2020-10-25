import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import PrimeraPagina from "../Pages/primerapagina";
import InicioSesion from "../Pages/iniciosesion";
import Registro from "../Pages/registro";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={PrimeraPagina} />
        <Route exact path="/iniciosesion" component={InicioSesion} />
        <Route exact path="/registro" component={Registro} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
