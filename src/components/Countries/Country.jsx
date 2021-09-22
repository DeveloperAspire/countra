import classes from "./Country.module.css";

const Country = () => {
  return (
    <div className={classes.container}>
      <img
        src="https://restcountries.eu/data/afg.svg"
        alt="A flag of a country"
      />
      <div className={classes.details}>
        <h4>Germany</h4>
        <p>
          <span>Population</span>: 127,000
        </p>
        <p>
          <span>Region</span>: Africa
        </p>
        <p>
          <span>Capital</span>: Abuja
        </p>
      </div>
    </div>
  );
};

export default Country;
