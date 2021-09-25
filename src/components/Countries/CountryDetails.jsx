import classes from "./CountryDetails.module.css";
import BackButton from "../UI/BackButton";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

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

 
 const darkMode = useSelector(state => state.countrySlice.darkMode)
      const allLanguages = languages.map(lang => lang.name)

      const detailsClass = darkMode ? `${classes.details} ${classes.dark}` : `${classes.details}`

      console.log(borders)
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
                <span>Population</span>: {population}
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
                <Link to={`/details/${bor}`}>{bor}</Link>
              ))}
            </p>
          
        </div>
      </section>
    </main>
  );
};

export default CountryDetails;
