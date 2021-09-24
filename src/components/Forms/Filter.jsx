import classes from "./Input.module.css";
import { useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { updateCountries, updateLoading } from "../../store/country-slice";
import { useHistory } from "react-router";

const REGIONS = [
  {
    region: "Africa",
    id: "r1",
  },
  {
    region: "Americas",
    id: "r2",
  },
  {
    region: "Asia",
    id: "r3",
  },
  {
    region: "Europe",
    id: "r4",
  },
  {
    region: "Oceania",
    id: "r5",
  },
];

const Filter = () => {
  const [hover, setHover] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();

  const darkMode = useSelector((state) => state.countrySlice.darkMode);

  const showDropDown = () => {
    setHover(!hover);
  };

  const getByRegionHandler = async (region) => {
    history.push(`/home?filter=${region}`);
    dispatch(updateLoading(true));
    const response = await axios.get(
      `https://restcountries.com/v2/continent/${region}`
    );
    dispatch(updateLoading(false));
    dispatch(updateCountries(response.data));
  };

  const filterClass = darkMode
    ? `${classes.filter} ${classes.dark}`
    : `${classes.filter}`;

  const dropDownStyle = hover
    ? `${classes.dropdown} ${classes.show}`
    : `${classes.dropdown} `;

  const dropDark = darkMode
    ? `${classes.dropdown} ${classes.darkdown}`
    : `${classes.dropdown}`;

  return (
    <form>
      <div className={filterClass} onClick={showDropDown}>
        <p>Filter by region</p>
        <i className="fas fa-angle-down"></i>
      </div>
      <div className={`${dropDownStyle} ${dropDark}`}>
        <ul>
          {REGIONS.map((region) => (
            <li
              key={region.id}
              onClick={getByRegionHandler.bind(this, region.region)}
            >
              {region.region}
            </li>
          ))}
        </ul>
      </div>
    </form>
  );
};

export default Filter;
