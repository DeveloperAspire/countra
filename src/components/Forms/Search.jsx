import classes from './Input.module.css'
import { useSelector } from "react-redux";


const Search = () => {
  const darkMode = useSelector((state) => state.countrySlice.darkMode);

   const containerClass = darkMode
     ? `${classes.container} ${classes.dark}`
     : `${classes.container}`;
  return (
    <form>
      <div className={containerClass}>
        <i className="fas fa-search"></i>
        <input type="text" placeholder="Search for a country..." />
      </div>
    </form>
  );
};

export default Search;
