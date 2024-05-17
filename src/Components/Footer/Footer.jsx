import Button from "../Button/Button"
import styles from './Footer.module.scss'

export default function Footer(){
    return(
            <footer className={styles.footer}>
                <div className={styles.wrapper}>
                <Button>Выученные</Button>
                <Button>Карточки слов</Button>
                <Button>Список слов</Button>
                </div>
            </footer>
       
    )
}