import Button from "../Button/Button"
import styles from './Footer.module.scss'

export default function Footer(){
    return(
     
            <footer className={styles.footer}>
                <div className={styles.wrapper}>
                <Button name='Выученные'/>
                <Button name='Карточки слов'/>
                <Button name='Список слов'/>
                </div>

            </footer>
       
    )
}