import classes from './BackButton.module.css'

const BackButton = ()=> {
      return (
        <button className={classes.button}>
          <i class="fas fa-long-arrow-alt-left"></i>
          Back
        </button>
      );
}

export default BackButton