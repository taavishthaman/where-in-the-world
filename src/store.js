import countriesReducer from "./features/CountriesList/countriesSlice";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
    reducer : {
        countries : countriesReducer
    }
})

export default store;