import classes from "./CountryDetails.module.css";
import BackButton from "../UI/BackButton";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useParams } from "react-router";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { updateLoading } from "../../store/country-slice";

const CountryDetails = ({
  name,
  nativeName,
  population,
  capital,
  region,
  continent,
  flag,
  languages,
  domain,
  currencies,
  borders
}) => {
  const params = useParams()
  const dispatch = useDispatch()

  useEffect(()=> {
    console.log('hello')
    dispatch(updateLoading(true))
  },[params.countryCode, dispatch])
 
 const darkMode = useSelector(state => state.countrySlice.darkMode)
      const allLanguages = languages.map(lang => lang.name)

      const detailsClass = darkMode ? `${classes.details} ${classes.dark}` : `${classes.details}`
      const overFlow = borders.length > 4
      const linkClass = overFlow ? `${classes.linkgrid}` : ''
      const formatedPopulation = population.toLocaleString("en");

  return (
    <main className={classes.main}>
      <BackButton />
      <section className={classes.container}>
        <div>
          <img src={flag} alt="" />
        </div>

        <div className={detailsClass}>
          <h1>{name}</h1>
          <div className={classes.grid}>
            <div>
              <p>
                <span>Native Name</span>: {nativeName}
              </p>
              <p>
                <span>Population</span>: {formatedPopulation}
              </p>
              <p>
                <span>Region</span>: {continent}
              </p>
              <p>
                <span>Sub region</span>: {region}
              </p>
              <p>
                <span>Captial</span>: {capital}
              </p>
            </div>

            <div className={classes.second}>
              <p>
                <span>Top Level Domain</span>: {domain[0]}
              </p>
              <p>
                <span>Currency</span>: {currencies[0].name}
              </p>
              <p>
                <span>Languages</span>: {allLanguages.toString(" ")}
              </p>
            </div>
          </div>
          
            <p className={classes.p}>
              Borders:
              {borders.map((bor) => (
                <Link className={linkClass} key={bor} to={`/details/${bor}`}>{bor}</Link>
              ))}
            </p>
          
        </div>
      </section>
    </main>
  );
};

export default CountryDetails;
