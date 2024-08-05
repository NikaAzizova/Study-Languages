import { NavLink } from 'react-router-dom';
import Button from "../Button/Button.jsx";
import styles from './Header.module.scss';
import logo from '../../assets/logo.png'

export default function Header() {
    return (

        <header className={styles.header}>
            <div className={styles.wrapper}>

                <nav className={styles.nav}>
                    <NavLink to='/'><img className={styles.logo} src={logo} alt="logo" /></NavLink>
                </nav>
            </div>

            <nav className={styles.nav}>
                <NavLink to='/' className={styles.navLink}>Home</NavLink>
                <NavLink to='/game' className={styles.navLink}>Game</NavLink>
                <NavLink to='/table' className={styles.navLink}>Table</NavLink>
            </nav>

        </header>


    )
}