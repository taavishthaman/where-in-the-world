import Navigation from "../features/Navigation/Navigation"
import CountriesList from "../features/CountriesList/CountriesList"
import styles from './CountriesPage.module.css'

export default function CountriesPage() {
    return <>
        <div className={styles.countriesPageContainer}>
            <Navigation/>
            <CountriesList/>
        </div>
    </>
}