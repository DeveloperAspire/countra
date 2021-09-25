import CountryDetails from "../components/Countries/CountryDetails";
import { useParams } from "react-router";
import { useEffect } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { updateLoading, updateSelected } from "../store/country-slice";
import LoadingSpinner from "../components/UI/LoadingSpinner";

const Details = () => {
  const selectedCountry = useSelector(
    (state) => state.countrySlice.selectedCountry
  );
  const params = useParams();
  const loading = useSelector((state) => state.countrySlice.isLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchCountryDetail = async () => {
      dispatch(updateLoading(true));
      const response = await axios(
        `https://restcountries.com/v2/alpha/${params.countryCode}`
      );
      updateSelected(response.data);
      dispatch(updateLoading(false));
      dispatch(updateSelected(response.data));
      console.log(response.data.name);
    };

    fetchCountryDetail();
  }, [params.countryCode, dispatch]);

  if (loading && selectedCountry === null) {
    return (
      <div className="center">
        <LoadingSpinner />
      </div>
    );
  }

  return (
    <div>
      {selectedCountry && (
        <CountryDetails
          name={selectedCountry.name}
          nativeName={selectedCountry.nativeName}
          population={selectedCountry.population}
          capital={selectedCountry.capital}
          region={selectedCountry.region}
          continent={selectedCountry.continent}
          domain={selectedCountry.topLevelDomain}
          currencies={selectedCountry.currencies}
          languages={selectedCountry.languages}
          flag={selectedCountry.flags[1]}
          borders={selectedCountry.borders}
        />
      )}
    </div>
  );
};

export default Details;
