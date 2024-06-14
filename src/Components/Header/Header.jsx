import { NavLink } from 'react-router-dom';
import styles from './Header.module.scss';
import logo from '../../assets/logo.png'

export default function Header() {
    return (

        <header className={styles.header}>
            <div className={styles.wrapper}>

                <nav className={styles.nav}>
                    <NavLink to='/' className={styles.navLink}><img className={styles.logo} src={logo} alt="logo" /></NavLink>
                </nav>
            </div>

            <nav className={styles.nav}>
                <NavLink to='/' className={styles.navLink}>Главная</NavLink>
                <NavLink to='/game' className={styles.navLink}>Карточки слов</NavLink>
                <NavLink to='/table' className={styles.navLink}>Таблица слов</NavLink>
            </nav>

        </header>


    )
}