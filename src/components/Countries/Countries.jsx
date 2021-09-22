import Country from "./Country";
import classes from "./Countries.module.css";
import axios from "axios";
import LoadingSpinner from '../UI/LoadingSpinner'
import { useEffect, useState } from "react";

const Countries = () => {
  const [countries, setCountries] = useState(null);

  useEffect(() => {
    axios.get("https://restcountries.eu/rest/v2/all").then((res) => {
      setCountries(res.data);
    });
  }, []);

  if (!countries) {
    return <div className="center"><LoadingSpinner/></div>;
  }

  return (
    <section className={classes.wrapper}>
      {countries.map((country) => (
        <Country
          name={country.name}
          key={country.alpha2Code}
          flag={country.flag}
          capital={country.capital}
          region={country.region}
          population={country.population}
          code={country.alpha2Code}
        />
      ))}
    </section>
  );
};

export default Countries;
