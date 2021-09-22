import {configureStore} from '@reduxjs/toolkit'
import countriesSlice from './country-slice'


const store = configureStore({
      reducer: {
            countrySlice: countriesSlice
      }
})

export default store