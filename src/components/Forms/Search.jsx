import classes from "./Input.module.css";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { useHistory } from "react-router";
import axios from "axios";
import { updateLoading, updateCountries } from "../../store/country-slice";

const Search = () => {
  const darkMode = useSelector((state) => state.countrySlice.darkMode);
  const [enteredValue, setEnteredValue] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();

  const searchCountryHandler = async (e) => {
    e.preventDefault();

    if(enteredValue.trim() !== ""){
       history.push(`/home?search=${enteredValue}`);
       dispatch(updateLoading(true));
       const response = await axios.get(
         `https://restcountries.com/v2/name/${enteredValue}`
       );
       dispatch(updateCountries(response.data));
       dispatch(updateLoading(false));
       setEnteredValue("");
    }
    else {
      history.push("*");
    }
  };

  const enteredInputHandler = (e) => {
    setEnteredValue(e.target.value);
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
