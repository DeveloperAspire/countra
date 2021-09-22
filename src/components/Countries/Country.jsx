import classes from "./Country.module.css";
import { Link } from "react-router-dom";

const Country = ({ name, flag, capital, region, population , code}) => {
  return (
    <Link to={`/details/${code}`}>
      <div className={classes.container}>
        <img src={flag} alt="A flag of a country" />

        <div className={classes.details}>
          <h4>{name}</h4>
          <p>
            <span>Population</span>: {population}
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
