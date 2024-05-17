import Button from "../Button/Button.jsx";
import styles from './Header.module.scss';

export default function Header() {
    return (

        <header className={styles.header}>
            <div className={styles.wrapper}>
                 <Button>Войти</Button> 
            </div>
        </header>


    )
}