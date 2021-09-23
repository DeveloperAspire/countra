import { Switch, Route, Redirect } from "react-router";
import Home from "../src/pages/Home";
import Details from '../src/pages/Details'
import NotFound from "./pages/NotFound";
import {  useSelector } from "react-redux";
import "./App.css";

const App = () => {
  const darkMode = useSelector((state) => state.countrySlice.darkMode);

  const bodyColor= darkMode ? 'body dark' : 'body'
  return (
    <div className={bodyColor}>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/home" />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/details/:countryCode">
          <Details />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
