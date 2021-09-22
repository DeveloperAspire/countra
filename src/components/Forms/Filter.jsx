import classes from "./Input.module.css";
import { useState } from "react";

const REGIONS = [
  {
    region: "Africa",
    id: "r1",
  },
  {
    region: "America",
    id: "r2",
  },
  {
    region: "Asia",
    id: "r3",
  },
  {
    region: "Europe",
    id: "r4",
  },
  {
    region: "Oceania",
    id: "r5",
  },
];

const Filter = () => {
  const [hover, setHover] = useState(false);

  const showDropDown = () => {
    setHover(!hover);
  };

  const getByRegionHandler = (region) => {
    console.log(region);
  };

  const dropDownStyle = hover
    ? `${classes.dropdown} ${classes.show}`
    : `${classes.dropdown} `;

  return (
    <form onClick={showDropDown}>
      <div className={classes.filter}>
        <p>Filter by region</p>
        <i className="fas fa-angle-down"></i>
      </div>
      <div className={dropDownStyle}>
        <ul>
          {REGIONS.map((region) => (
            <li key={region.id} onClick={getByRegionHandler.bind(this, region.region)}>
              {region.region}
            </li>
          ))}
        </ul>
      </div>
    </form>
  );
};

export default Filter;
