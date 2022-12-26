import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "../pages/Home";
import Person from "../pages/Person";
import Startship from "../pages/Startship";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/personagem/:id" component={Person} />
        <Route path="/nave/:id" component={Startship} />
        <Route path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  );
};
export default Router;
