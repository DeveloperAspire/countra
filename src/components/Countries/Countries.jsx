import Country from "./Country";
import classes from "./Countries.module.css";
import LoadingSpinner from '../UI/LoadingSpinner'
import { useEffect} from "react";
import {useSelector} from 'react-redux'
import { useHistory } from "react-router";
// import useHttp from "../../Hooks/useHttp";
import { useDispatch } from "react-redux";
import axios from 'axios'
import { updateCountries, updateLoading } from "../../store/country-slice"

const Countries = () => {
  const countries = useSelector(state => state.countrySlice.countries)
  const loading = useSelector((state) => state.countrySlice.isLoading);
  const dispatch = useDispatch()
  const history = useHistory()
  
  


  useEffect(() => {
    const fetchCountries = async ()=> {
      history.push('/home')
      dispatch(updateLoading(true))
      const response = await axios.get("https://restcountries.com/v2/all");
      dispatch(updateCountries(response.data))
      dispatch(updateLoading(false))
    }

    fetchCountries()
   
  }, [dispatch,history]);

  if (loading || countries.length === 0) {
    console.log('loading...')
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
          region={country.continent}
          population={country.population}
          code={country.alpha2Code}
        />
      ))}
    </section>
  );
};

export default Countries;
