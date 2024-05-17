import React, { useState } from 'react';
import Button from "../Button/Button"
import styles from './Card.module.scss'



export default function Card({ words }) {

    const [showWord, setShowWord] = useState(false);// состояние для отрисовки перевода слова, и количества выученных слов, если кликнули на кнопку "проверить", если нет то по умолчанию стоит кнопка и число 0
    const [count, setCount] = useState(0)//храним число выученных слов, по умолчанию стоит 0

    const onButtonClick = () => {
        setShowWord(true);
        setCount(count + 1) // при клике на кнопку, в состояние будет записываться +1, и  итог отрисовываться
    };

    return (
        <div>
            <div className={styles.card}  >
                <div className={styles.wrapper}>
                    <p className={styles.word}>{words.word}</p>
                    <p className={styles.transcription}>{words.transcription}</p>
                    <div className={styles.div}  >
                        {showWord ? <p className={styles.translationWord}>{words.translation}</p> : <Button onTouch={onButtonClick} >Проверить</Button>}
                    </div>
                </div>
                <p className={styles.learnedAmount}>Выучено в этот раз:  {showWord ? <span>{count}</span> : <span>0</span>}</p>
            </div>
        </div>
    )
}