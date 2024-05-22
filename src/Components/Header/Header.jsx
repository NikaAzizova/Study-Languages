import {NavLink} from 'react-router-dom';
import Button from "../Button/Button.jsx";
import styles from './Header.module.scss';

export default function Header() {
    return (

        <header className={styles.header}>
            <div className={styles.wrapper}>
                 <Button>Войти</Button> 
            </div>
            <nav className={styles.nav}>
            <NavLink to='/' className={styles.navLink}>Home</NavLink>
            <NavLink to='/game' className={styles.navLink}>Game</NavLink>
            <NavLink to='/table' className={styles.navLink}>Table</NavLink>
          </nav>
        </header>


    )
}