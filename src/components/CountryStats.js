import { useSelector } from 'react-redux';
import styles from './CountryStats.module.css';

export default function CountryStats({data}) {
    const currencyKeys = Object.keys(data.currencies);
    
    const currencies = currencyKeys.map((currency, i) => {
        return data.currencies[currency].name
    })

    const languages = Object.values(data.languages);
    const {isDark} = useSelector(state => state.countries);

    return <div className={styles.countryStatsContainer}>
        <div className={`${styles.countryName} ${isDark ? styles.countryNameDark : ''}`}>{data.name.common}</div>
        <div className={styles.countryStatsList}>
            <div>
                <div>
                    <span className={`${styles.countryStatLabel} ${isDark ? styles.countryStatLabelDark : ''}`}>Native Name: </span>
                    <span className={`${styles.countryStatValue} ${isDark ? styles.countryStatValueDark : ''}`}>{data.name.nativeName[Object.keys(data.name.nativeName)[0]]['common']}</span>
                </div>
                <div>
                    <span className={`${styles.countryStatLabel} ${isDark ? styles.countryStatLabelDark : ''}`}>Population: </span>
                    <span className={`${styles.countryStatValue} ${isDark ? styles.countryStatValueDark : ''}`}>{data.population}</span>
                </div>
                <div>
                    <span className={`${styles.countryStatLabel} ${isDark ? styles.countryStatLabelDark : ''}`}>Region: </span>
                    <span className={`${styles.countryStatValue} ${isDark ? styles.countryStatValueDark : ''}`}>{data.region}</span>
                </div>
                <div>
                    <span className={`${styles.countryStatLabel} ${isDark ? styles.countryStatLabelDark : ''}`}>Sub Region: </span>
                    <span className={`${styles.countryStatValue} ${isDark ? styles.countryStatValueDark : ''}`}>{data.subregion}</span>
                </div>
                <div>
                    <span className={`${styles.countryStatLabel} ${isDark ? styles.countryStatLabelDark : ''}`}>Capital: </span>
                    <span className={`${styles.countryStatValue} ${isDark ? styles.countryStatValueDark : ''}`}>{data.capital}</span>
                </div>
            </div>
            <div>
                <div>
                    <span className={`${styles.countryStatLabel} ${isDark ? styles.countryStatLabelDark : ''}`}>Top Level Domain: </span>
                    <span className={`${styles.countryStatValue} ${isDark ? styles.countryStatValueDark : ''}`}>{data.tld}</span>
                </div>
                <div>
                    <span className={`${styles.countryStatLabel} ${isDark ? styles.countryStatLabelDark : ''}`}>Currencies: </span>
                        {
                            currencies.map(currency => <span className={`${styles.countryStatValue} ${isDark ? styles.countryStatValueDark : ''}`}>{currency}</span>) 
                        }
                </div>
                <div>
                    <span className={`${styles.countryStatLabel} ${isDark ? styles.countryStatLabelDark : ''}`}>Languages: </span>
                    {
                        languages.map(language => <span className={`${styles.countryStatValue} ${isDark ? styles.countryStatValueDark : ''}`}>{`${language} `}</span>)
                    }
                </div>
            </div>
        </div>
        {data.borders && <div className={styles.borderCountries}>
            <div>
                <span className={`${styles.countryStatLabel} ${isDark ? styles.countryStatLabelDark : ''}`}>Border Countries: </span>
            </div>
            <div className={styles.countryContainer}>
                {data.borders.map(border => <div className={`${styles.borderCountryBtn} ${isDark ? styles.borderCountryBtnDark : ''}`}>{border}</div>)}
            </div>
        </div>}
    </div>
}