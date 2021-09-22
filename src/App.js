import { Switch, Route, Redirect } from "react-router";
import Home from "../src/pages/Home";
import Details from '../src/pages/Details'
import NotFound from "./pages/NotFound";
import "./App.css";

const App = () => {
  return (
    <Switch>
      <Route path="/" exact>
        <Redirect to="/home" />
      </Route>
      <Route path="/home">
        <Home />
      </Route>
      <Route path="/details/:countryCode">
        <Details/>
      </Route>
      <Route path="*">
        <NotFound/>
      </Route>
    </Switch>
  );
};

export default App;
