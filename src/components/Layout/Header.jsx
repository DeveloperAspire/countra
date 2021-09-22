import classes from './Header.module.css'

const Header = ()=> {
      return (
        <header className={classes.header}>
          <h1>Where in the world?</h1>
          <button className={classes.mode}>
            <i className="far fa-moon"></i>
            <p>Dark Mode</p>
          </button>
        </header>
      );
}

export default Header