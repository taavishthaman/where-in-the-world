import { useDispatch, useSelector } from "react-redux";
import styles from "./SearchBar.module.css";
import {
  setLoading,
  setCountries,
  setError,
  setQuery,
  setRegion,
} from "../features/CountriesList/countriesSlice";
import { useEffect, useRef } from "react";

export default function SearchBar() {
  const dispatch = useDispatch();
  const { region, isDark } = useSelector((state) => state.countries);
  const inputRef = useRef();

  useEffect(() => {
    if (region) {
      inputRef.current.value = "";
    }
  }, [region]);

  async function getCountries(query) {
    try {
      dispatch(setLoading());
      dispatch(setError(""));
      dispatch(setQuery(query));
      if (!query) return;
      const url = `https://restcountries.com/v3.1/name/${query}`;
      const res = await fetch(url);
      if (res.status === 404) {
        dispatch(setCountries([]));
        return;
      }
      const data = await res.json();
      dispatch(setCountries(data));
    } catch (e) {
      dispatch(setError(e.message));
    } finally {
      setError("");
    }
  }

  async function changeHandler(e) {
    getCountries(e.target.value);
  }

  return (
    <div className={styles.inputWrapper}>
      {isDark ? (
        <svg
          className={styles.searchIcon}
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M12.5 11H11.7L11.4 10.7C12.4 9.6 13 8.1 13 6.5C13 2.9 10.1 0 6.5 0C2.9 0 0 2.9 0 6.5C0 10.1 2.9 13 6.5 13C8.1 13 9.6 12.4 10.7 11.4L11 11.7V12.5L16 17.5L17.5 16L12.5 11ZM6.5 11C4 11 2 9 2 6.5C2 4 4 2 6.5 2C9 2 11 4 11 6.5C11 9 9 11 6.5 11Z"
            fill="white"
          />
        </svg>
      ) : (
        <svg
          className={styles.searchIcon}
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M12.5 11H11.7L11.4 10.7C12.4 9.6 13 8.1 13 6.5C13 2.9 10.1 0 6.5 0C2.9 0 0 2.9 0 6.5C0 10.1 2.9 13 6.5 13C8.1 13 9.6 12.4 10.7 11.4L11 11.7V12.5L16 17.5L17.5 16L12.5 11ZM6.5 11C4 11 2 9 2 6.5C2 4 4 2 6.5 2C9 2 11 4 11 6.5C11 9 9 11 6.5 11Z"
            fill="#848484"
          />
        </svg>
      )}
      <input
        ref={inputRef}
        type="text"
        placeholder="Search for a country..."
        className={`${styles.searchBar} ${isDark ? styles.searchBarDark : ""}`}
        onChange={(e) => changeHandler(e)}
      />
    </div>
  );
}
