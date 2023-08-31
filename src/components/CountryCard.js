import styles from './CountryCard.module.css';
import { Link } from 'react-router-dom';
import CountryFlag from './CountryFlag';
import { useSelector } from 'react-redux';

export default function CountryCard({data}) {
    const {isDark} = useSelector(state => state.countries);

    return <Link to={`${data.name.common}`} state={{from : data}} className={styles.card}>
        <div>
            <div className={styles.countryFlag}>
                <CountryFlag width={26.4} height={16} src={data.flags.png}/>
            </div>
            <div className={`${styles.countryStats} ${isDark ? styles.countryStatsDark : ''}`}>
                <p className={`${styles.countryName} ${isDark ? styles.countryNameDark : ''}`}>{data.name.common}</p>
                <div className={styles.stats}>
                    <div>
                        <span className={`${styles.statTitle} ${isDark ? styles.statTitleDark : ''}`}>Population: </span> 
                        <span className={`${styles.statName} ${isDark ? styles.statNameDark : ''}`}>{data.population}</span>
                    </div>
                    <div>
                        <span className={`${styles.statTitle} ${isDark ? styles.statTitleDark : ''}`}>Region: </span> 
                        <span className={`${styles.statName} ${isDark ? styles.statNameDark : ''}`}>{data.region}</span>
                    </div>
                    <div>
                        <span className={`${styles.statTitle} ${isDark ? styles.statTitleDark : ''}`}>Capital: </span> 
                        <span className={`${styles.statName} ${isDark ? styles.statNameDark : ''}`}>{data.capital}</span>
                    </div>
                </div>
            </div>
        </div>
    </Link>
}