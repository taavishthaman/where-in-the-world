import { useDispatch, useSelector } from "react-redux";
import styles from "./BackBtn.module.css";
import { useNavigate } from "react-router-dom";
import { setQuery, setRegion } from "../features/CountriesList/countriesSlice";

export default function BackBtn() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isDark } = useSelector((state) => state.countries);

  return (
    <button
      className={`${styles.btn} ${isDark ? styles.btnDark : ""}`}
      onClick={() => {
        dispatch(setQuery(""));
        dispatch(setRegion(""));
        navigate(-1);
      }}
    >
      {isDark ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M6.46447 4.10744L7.64298 5.28596L3.75389 9.17504L18.6031 9.17504L18.6031 10.825L3.75389 10.825L7.64298 14.714L6.46447 15.8926L0.57191 10L6.46447 4.10744Z"
            fill="white"
          />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M6.46447 4.10744L7.64298 5.28596L3.75389 9.17504L18.6031 9.17504L18.6031 10.825L3.75389 10.825L7.64298 14.714L6.46447 15.8926L0.57191 10L6.46447 4.10744Z"
            fill="#111517"
          />
        </svg>
      )}
      <p>Back</p>
    </button>
  );
}
