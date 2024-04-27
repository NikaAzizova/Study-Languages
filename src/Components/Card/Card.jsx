import React, { useState } from 'react';
import Button from "../Button/Button"
import styles from './Card.module.scss'
import { englishWords } from '../../words.js';

export default function Card() {
    const [showWord, setShowWord] = useState(false);
    const [word, setWord] = useState(englishWords[0].translation);

    const onButtonClick = () => {
        setShowWord(true);
      };
    //увеличиваем количество выученных слов на единицу если кликнули на кнопку "проверить"
      let sum =0;
     if(onButtonClick){
        sum+=1;
     }

    return (

        <div className={styles.card}>
            <div className={styles.wrapper}>
                <p className={styles.word}>{englishWords[0].word}</p>
                <p className={styles.transcription}>{englishWords[0].transcription}</p>
                <div className={styles.div} onClick={onButtonClick}>
                 
                    {showWord? <p className={styles.translationWord}>{word}</p>:<Button name='Проверить' />}
                  
                </div>
              
            </div>
            <p className={styles.learnedAmount} onClick={onButtonClick}>Выучено в этот раз:  {showWord? <span>{sum}</span>: <span>0</span>}
           
            </p>

        </div>
    )
}