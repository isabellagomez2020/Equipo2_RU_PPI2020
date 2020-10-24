import React from 'react';
import{BrowserRouter, Switch, Route} from "react-router-dom"
import PrimeraPagina from "../Pages/primerapagina"
import InicioSesion from "../Pages/iniciosesion"

const App = () => {
  return(
    <BrowserRouter>
    <Switch>
      <Route exact path="/" component={PrimeraPagina}/>
      <Route exact path="/iniciosesion" component={InicioSesion}/>
    </Switch>
    </BrowserRouter>
  )
}

export default App;