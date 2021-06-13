import { Route, Switch } from "react-router-dom";
import FrontPage from "Components/Pages";

const MainRoute = () => (
  <Switch>
    <Route path="/">
      <FrontPage />
    </Route>
  </Switch>
);

export default MainRoute;
