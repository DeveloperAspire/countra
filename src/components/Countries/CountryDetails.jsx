import classes from "./CountryDetails.module.css";
import BackButton from "../UI/BackButton";
import { useSelector } from "react-redux";

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
  currencies
}) => {
 const darkMode = useSelector(state => state.countrySlice.darkMode)
      const allLanguages = languages.map(lang => lang.name)
      console.log(allLanguages)

      const detailsClass = darkMode ? `${classes.details} ${classes.dark}` : `${classes.details}`
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

            <div>
              <p>
                <span>Top Level Domain</span>: {domain[0]}
              </p>
              <p>
                <span>Currency</span>: {currencies[0].name}
              </p>
              <p>
                <span>Languages</span>: {allLanguages.toString(' ')}
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default CountryDetails;
