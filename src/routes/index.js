import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "../pages/Home/Home.js";
import Person from "../pages/Person/Person.js";
import Startship from "../pages/Starship/Startship.js";

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
