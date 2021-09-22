import classes from './Input.module.css'

const Search = () => {
  return (
    <form>
      <div className={classes.container}>
        <i class="fas fa-search"></i>
        <input type="text" placeholder="Search for a country..." />
      </div>
    </form>
  );
};

export default Search;
