import styles from '../components/CountryFlagCard.module.css'

export default function CountryFlagCard({src}) {
    return <img className={styles.countryFlag} src={src}/>
}