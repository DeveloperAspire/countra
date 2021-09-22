import Country from "./Country"
import classes from './Countries.module.css'

const Countries = ()=> {

      return (
        <section className={classes.wrapper}>
          <Country />
          <Country />
          <Country />
          <Country />
        </section>
      );

}

export default Countries