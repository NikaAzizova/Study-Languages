import Button from "../Button/Button"
import styles from './Card.module.scss'

export default function Card(){
    return(
    
           <div className={styles.card}>
            <div className={styles.wrapper}>
                <p className={styles.word}>surface</p>
                <p className={styles.transcription}>[ˈsɜː.fɪs]</p>
                <Button name='Проверить'/>   
            </div>
         <p className={styles.learnedAmount}>Выучено в этот раз: </p>

        </div>
    )
}