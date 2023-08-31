import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    countriesData : [],
    isLoading : false,
    query : '',
    region : '',
    error : '',
    isDark : false
};

const countriesSlice = createSlice({
    name : 'countries',
    initialState,
    reducers : {
        setLoading(state, action) {
            state.isLoading = true;
        },
        setError(state, action) {
            state.error = action.payload
        },
        setCountries(state, action) {
            state.countriesData = action.payload
            state.isLoading = false;
        },
        setQuery(state, action) {
            state.query = action.payload;
        },
        setRegion(state, action) {
            state.region = action.payload;
        },
        setDark(state, action) {
            state.isDark= !state.isDark;
        }
    }
})

export const { setLoading, setCountries, setError, setQuery, setRegion, setDark } = countriesSlice.actions;

export default countriesSlice.reducer;