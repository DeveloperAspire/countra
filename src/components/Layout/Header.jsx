import classes from './Header.module.css'
import {useSelector, useDispatch} from 'react-redux'
import { updateMode } from '../../store/country-slice';
const Header = ()=> {
  const dispatch = useDispatch()
  const darkMode = useSelector(state => state.countrySlice.darkMode)

  const changeModeHandler = ()=> {
    dispatch(updateMode())
  }

  const headerClass = darkMode ? `${classes.header} ${classes.dark}` : `${classes.header}`
      return (
        <header className={headerClass}>
          <h1>Where in the world?</h1>
          <button className={classes.mode} onClick={changeModeHandler}>
            {!darkMode && <i className="far fa-moon"></i>}
            {darkMode && <i className="fas fa-moon"></i>}
            {!darkMode && <p>Dark Mode</p>}
            {darkMode && <p>Light Mode</p>}
          </button>
        </header>
      );
}

export default Header