import classes from "./InputContainer.module.css";
import Filter from "./Filter";
import Search from "./Search";

const InputContainer = () => {
  return (
    <div className={classes.container}>
      <Search />
      <Filter />
    </div>
  );
};

export default InputContainer;
