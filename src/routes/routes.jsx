import { Route, Switch } from "react-router-dom";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Cadastro from "../pages/Cadastro/Cadastro";

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/login">
        <Login />
      </Route>
      <Route exact path="/cadastro">
        <Cadastro />
      </Route>
    </Switch>
  );
}
