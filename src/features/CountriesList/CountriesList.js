import { useEffect, useState } from 'react'
import CountryCard from '../../components/CountryCard'
import styles from './CountriesList.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { setLoading, setCountries, setError } from './countriesSlice'

export default function CountriesList () {
    const {countriesData, isLoading, error, query, region, isDark} = useSelector(state => state.countries);

    const dispatch = useDispatch();

    useEffect(() => {
        async function fetchCountries() {
            dispatch(setLoading());
            dispatch(setError(''));
            try {
                const url = `https://restcountries.com/v3.1/all`;
                const res = await fetch(url);
                const data = await res.json();
                dispatch(setCountries(data));
            } catch(e) {
                dispatch(setError(e.message))
            } finally {
                setError('');
            }
        }
        if(!query && !region) {
            fetchCountries();
        }
    }, [dispatch, query, region]);

    return <div className={`${styles.container} ${isDark ? styles.containerDark : ''}`}>
        {
            isLoading && <h1 className={isDark ? styles.loadingTextDark : styles.loadingText}>Loading...</h1>
        }
        {
            !isLoading && countriesData.length > 0 && countriesData.map(country => <CountryCard data={country}/>)
        }
        {
            error && <h1 className={isDark ? styles.loadingTextDark : styles.loadingText}>Something went wrong</h1>
        }
        {
            !isLoading && countriesData.length === 0 && <h1 className={isDark ? styles.loadingTextDark : styles.loadingText}>No data to display</h1>
        }
    </div>  
}