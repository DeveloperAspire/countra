import classes from './CountryDetails.module.css'
import BackButton from '../UI/BackButton';

const CountryDetails = () => {
  return (
    <main className={classes.main}>
          <BackButton/>
      <section className={classes.container}>
        <div>
          <img src="https://restcountries.com/data/png/col.png" alt="" />
        </div>

        <div className={classes.details}>
          <h1>Belgium</h1>
          <div className={classes.grid}>
            <div>
              <p>
                <span>Native Name</span>: Belgium
              </p>
              <p>
                <span>Population</span>: Belgium
              </p>
              <p>
                <span>Region</span>: Belgium
              </p>
              <p>
                <span>Sub region</span>: Belgium
              </p>
              <p>
                <span>Captial</span>: Belgium
              </p>
            </div>

            <div>
              <p>
                <span>Top Level Domain</span>: Belgium
              </p>
              <p>
                <span>Currency</span>: Belgium
              </p>
              <p>
                <span>Languages</span>: Belgium
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default CountryDetails;
