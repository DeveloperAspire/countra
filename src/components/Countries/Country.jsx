import classes from "./Country.module.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Country = ({ name, flag, capital, region, population , code}) => {
  const darkMode = useSelector((state) => state.countrySlice.darkMode);
  const formatedPopulation = population.toLocaleString('en')

  const containerClass = darkMode
    ? `${classes.container} ${classes.dark}`
    : `${classes.container}`;
    const linkClass = darkMode ? `${classes.link} ${classes.darklink}` : `${classes.link}`
  return (
    <Link to={`/details/${code}`} className={linkClass}>
      <div className={containerClass}>
        <img src={flag} alt="A flag of a country" />

        <div className={classes.details}>
          <h4>{name}</h4>
          <p>
            <span>Population</span>: {formatedPopulation}
          </p>
          <p>
            <span>Region</span>: {region}
          </p>
          <p>
            <span>Capital</span>: {capital}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default Country;
