// import { useState ,useCallback} from "react";
// import axios from "axios";
// import { useDispatch } from "react-redux";
// import { updateCountries, updateLoading } from "../store/country-slice";


// const useHttp = () => {
//   const dispatch = useDispatch();

//   const fetchCountries = async (URL) => {
//     dispatch(updateLoading(true))
//     const response = await axios.get(URL);
//     dispatch(updateCountries(response.data));
// //     setIsLoading(false)
// console.log(response.data)
//     dispatch(updateLoading(false))
//   }

//   return { fetchCountries };
// };

// export default useHttp;
