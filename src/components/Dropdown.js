import styles from './Dropdown.module.css';
import Select from 'react-select';
import { useDispatch, useSelector } from 'react-redux';
import { setLoading, setCountries, setError, setRegion } from '../features/CountriesList/countriesSlice'
import { useEffect, useRef } from 'react';

const options = [
    { value: 'Africa', label: 'Africa' },
    { value: 'America', label: 'America' },
    { value: 'Asia', label: 'Asia' },
    { value: 'Europe', label: 'Europe' },
    { value: 'Oceania', label: 'Oceania' }
];

export default function Dropdown() {
    const dispatch = useDispatch();
    const selectRef = useRef();
    const {query, isDark} = useSelector(state => state.countries);

    useEffect(() => {
        if(query) {
            selectRef.current.setValue('')
        }
    }, [query])

    async function getCountries(region) {
        try {
            dispatch(setLoading());
            dispatch(setError(''));
            dispatch(setRegion(region));
            if(!region) return;
            const url = `https://restcountries.com/v3.1/region/${region}`;
            console.log(url)
            const res = await fetch(url);
            if(res.status === 404) {
                dispatch(setCountries([]));
                return;
            }
            const data = await res.json();
            dispatch(setCountries(data))
        } catch (e) {
            dispatch(setError(e.message));
        } finally {
            setError('');
        }   
    }

    async function onChangeHandler(e) {
       getCountries(e.value);
    }

    return <Select
        onChange={e => onChangeHandler(e)}
        className={`${styles.dropDown} ${isDark ? styles.dropdownDark : ''}`}
        options={options}
        placeholder='Filter by region'
        components={{
            IndicatorSeparator: () => null
        }}
        ref={selectRef}
        styles={{
            control: base => ({
                ...base,
                height: '5.6rem',
                border : 'none',
                backgroundColor : isDark ? '#2B3844' : '#fff',
            }),
            option: base =>  ({
                ...base,
                backgroundColor: isDark ? "#2B3844" : "#fff",
            })
        }}
        theme={(theme) => ({
            ...theme,
            colors : {
                text : isDark ? '#fff' : '',
                opacity : 100
            }
        })}
    />
}