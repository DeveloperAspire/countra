import classes from './BackButton.module.css'
import { useHistory } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { updateSelected } from '../../store/country-slice';

const BackButton = ()=> {
  const dispatch = useDispatch()
  const darkMode = useSelector(state => state.countrySlice.darkMode)
  const history = useHistory()

  const buttonClass = darkMode ? `${classes.button} ${classes.darkBtn}` : `${classes.button}`

  const goBack = ()=> {
    history.push('/home')
    dispatch(updateSelected(null))
  }
      return (
        <button className={buttonClass} onClick={goBack}>
          <i className="fas fa-long-arrow-alt-left"></i>
          Back
        </button>
      );
}

export default BackButton