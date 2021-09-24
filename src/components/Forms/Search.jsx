import classes from "./Input.module.css";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { useHistory, useLocation } from "react-router";
import axios from "axios";
import { updateLoading, updateCountries } from "../../store/country-slice";

const Search = () => {
  const darkMode = useSelector((state) => state.countrySlice.darkMode);
  const [enteredValue, setEnteredValue] = useState("");
  const [isValid, setIsValid] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();
  const match = useLocation();

  console.log(match);

  const searchCountryHandler = async (e) => {
    e.preventDefault();

    if (isValid && match.search !== "") {
      history.push(`/home?search=${enteredValue}`);
      dispatch(updateLoading(true));
      const response = await axios.get(
        `https://restcountries.com/v2/name/${enteredValue}`
      );
      dispatch(updateCountries(response.data));
      dispatch(updateLoading(false));
    }

    history.push("*");
  };

  const enteredInputHandler = (e) => {
    if (e.target.value.trim() === "") {
      setIsValid(false);
    }

    setEnteredValue(e.target.value);
    setIsValid(true);
  };

  const containerClass = darkMode
    ? `${classes.container} ${classes.dark}`
    : `${classes.container}`;
  return (
    <form onSubmit={searchCountryHandler}>
      <div className={containerClass}>
        <i className="fas fa-search" onClick={searchCountryHandler}></i>
        <input
          type="text"
          placeholder="Search for a country..."
          value={enteredValue}
          onChange={enteredInputHandler}
        />
      </div>
    </form>
  );
};

export default Search;
