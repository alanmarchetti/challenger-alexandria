import { BrowserRouter, Switch, Route } from "react-router-dom";

import { Home } from "../pages/Home";
import { Details } from "../pages/Details";
import { Graphics } from "../pages/Graphics";

export const Routes = () => {
    return(
        <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/desafio_01" component={Details} />
          <Route exact path="/desafio_02" component={Graphics} />
        </Switch>
      </BrowserRouter>
    )
}