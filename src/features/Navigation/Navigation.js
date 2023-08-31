import styles from './Navigation.module.css';
import SearchBar from '../../components/SearchBar';
import Dropdown from '../../components/Dropdown';
import { useSelector } from 'react-redux';

export default function Navigation() {
    const {isDark} = useSelector(state => state.countries);
    return <div className={`${styles.navigation} ${isDark ? styles.navigationDark : ''}`}>
        <SearchBar />
        <Dropdown />
    </div>
}