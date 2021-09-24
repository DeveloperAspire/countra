import classes from './LoadingSpinner.module.css';
import { useSelector } from 'react-redux';

const LoadingSpinner = () => {
  const darkMode = useSelector(state=> state.countrySlice.darkMode)

  const spinnerClass = darkMode ? `${classes.darkspinner}` : `${classes.spinner}`
  return <div className={spinnerClass}></div>;
}

export default LoadingSpinner;
