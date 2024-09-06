import React, { useEffect, useState } from 'react';
import { useRef } from 'react';
import styles from './Card.module.scss'




export default function Card({ words, showWord, setShowWord }) {

    const [count, setCount] = useState(0)
    const refbtn = useRef();

    const onButtonClick = () => {
        setShowWord(true);
        setCount(count + 1)
    };

    useEffect(() => {

        if (showWord) {
            setShowWord(false)
        }
        refbtn.current.focus();

    }, [words.id])

    return (
        <div>
            <div className={styles.card} key={words.id} >
                <div className={styles.wrapper}>
                    <p className={styles.word}>{words.english}</p>
                    <p className={styles.transcription}>{words.transcription}</p>
                    <button className={styles.div} ref={refbtn}>
                        {showWord ? <p className={styles.translationWord}>{words.russian}</p> : <span onClick={onButtonClick}>Проверить</span>}

                    </button>
                </div>
                <p className={styles.learnedAmount}>Выучено в этот раз: <span>{count}</span></p>
            </div>
        </div>
    )
}