import React, { useEffect, useState } from 'react';
import Button from "../Button/Button"
import styles from './Card.module.scss'



export default function Card({ words, showWord, setShowWord }) {

    const [count, setCount] = useState(0)//храним число выученных слов, по умолчанию стоит 0

    const onButtonClick = () => {
        setShowWord(true);
        setCount(count + 1) // при клике на кнопку, в состояние будет записываться +1, и  итог отрисовываться
    };

    useEffect(() => { //добавила useEffect чтобы при обновлении страницы кнопка "Проверить" (перевод слова) снова появлялась
        if (showWord) {
            setShowWord(false)
        }
    }, [words.id]) //помещаем id слова чтобы useEffect следил за изменениями id слова, и если id изменился то срабатывает условие

    return (
        <div>
            <div className={styles.card} key={words.id} >
                <div className={styles.wrapper}>
                    <p className={styles.word}>{words.word}</p>
                    <p className={styles.transcription}>{words.transcription}</p>
                    <div className={styles.div}  >
                        {showWord ? <p className={styles.translationWord}>{words.translation}</p> : <Button onTouch={onButtonClick} >Проверить</Button>}
                    </div>
                </div>
                <p className={styles.learnedAmount}>Выучено в этот раз: <span>{count}</span></p>
            </div>
        </div>
    )
}