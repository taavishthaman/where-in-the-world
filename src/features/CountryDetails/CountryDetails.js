import { useSelector } from "react-redux";
import BackBtn from "../../components/BackBtn";
import CountryFlagCard from "../../components/CountryFlagCard";
import CountryStats from "../../components/CountryStats";
import styles from '../CountryDetails/CountryDetails.module.css'
import { useLocation } from 'react-router-dom'

export default function CountryDetails() {
    const location = useLocation();
    const { from } = location.state;
    const {isDark} = useSelector(state => state.countries);

    return <div className={`${styles.container} ${isDark ? styles.containerDark : ''}`}>
        <BackBtn/>
        <div className={styles.countryDetailInfo}>
            <CountryFlagCard src={from.flags.png}/>
            <CountryStats data={from}/>
        </div>
    </div>
}