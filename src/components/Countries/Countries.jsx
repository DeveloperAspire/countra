import Country from "./Country";
import classes from "./Countries.module.css";
import axios from "axios";
import LoadingSpinner from '../UI/LoadingSpinner'
import { useEffect} from "react";
import {useSelector, useDispatch} from 'react-redux'
import { updateCountries } from "../../store/country-slice";

const Countries = () => {
  const countries = useSelector(state => state.countrySlice.countries)
  const dispatch = useDispatch()

  useEffect(() => {
    axios.get("https://restcountries.com/v2/all").then((res) => {
      dispatch(updateCountries(res.data))
    });
  }, [dispatch]);

  if (countries.length === 0) {
    return <div className="center"><LoadingSpinner/></div>;
  }

  return (
    <section className={classes.wrapper}>
      {countries.map((country) => (
        <Country
          name={country.name}
          key={country.alpha2Code}
          flag={country.flags[1]}
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
