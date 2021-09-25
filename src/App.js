import { Switch, Route, Redirect } from "react-router";
import Header from "../src/components/Layout/Header";
import Footer from "./components/UI/Footer";
import Home from "../src/pages/Home";
import Details from '../src/pages/Details'
import NotFoundPage from "./pages/NotFoundPage";
import {  useSelector } from "react-redux";
import "./App.css";

const App = () => {
  const darkMode = useSelector((state) => state.countrySlice.darkMode);


  const bodyColor= darkMode ? 'body darkbody' : 'body'
  return (
    <div className={bodyColor}>
      <Header />
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
          <NotFoundPage />
        </Route>
      </Switch>
      <Footer/>
    </div>
  );
};

export default App;
