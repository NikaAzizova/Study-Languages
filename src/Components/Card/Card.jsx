import React, { useEffect, useState } from 'react';
import { useRef } from 'react';
import styles from './Card.module.scss'
import { observer, inject } from 'mobx-react';


/*
const Card = inject(['wordStore'])(observer(({wordStore,showWord,setShowWord})=>{

     const [count, setCount] = useState(0)//храним число выученных слов, по умолчанию стоит 0
    const refbtn =useRef();
   
    const onButtonClick = () => {
        setShowWord(true);
        setCount(count + 1) // при клике на кнопку, в состояние будет записываться +1, и  итог отрисовываться
    };
   
    useEffect(() => { //добавила useEffect чтобы при обновлении страницы кнопка "Проверить" (перевод слова) снова появлялась
        
        if (showWord) {
            setShowWord(false)
        }
        refbtn.current.focus();
       
    }, [wordStore.words.id]) //помещаем id слова чтобы useEffect следил за изменениями id слова, и если id изменился то срабатывает условие

   

    return (
        <div>
            <div className={styles.card} key={wordStore.words.id} >
                <div className={styles.wrapper}>
                    <p className={styles.word}>{wordStore.words.english}</p>
                    <p className={styles.transcription}>{wordStore.words.transcription}</p>
                    <button className={styles.div}  ref={refbtn}>
                        {showWord ? <p className={styles.translationWord}>{wordStore.words.translation}</p> : <span  onClick={onButtonClick}>Проверить</span> }
                      
                      {/*<Button  ref={refbtn}  onTouch={onButtonClick} >Проверить</Button>}*/ 
                      /*</button>
                      </div>
                      <p className={styles.learnedAmount}>Выучено в этот раз: <span>{count}</span></p>
                  </div>
              </div>
          )

}))

export default Card;
*/

export default function Card({ words,showWord,setShowWord }) {

    const {english, transcription, russian, id} = words;

   
    const [count, setCount] = useState(0)//храним число выученных слов, по умолчанию стоит 0
    const refbtn =useRef();
   
    const onButtonClick = () => {
        setShowWord(true);
        setCount(count + 1) // при клике на кнопку, в состояние будет записываться +1, и  итог отрисовываться
    };
   
    useEffect(() => { //добавила useEffect чтобы при обновлении страницы кнопка "Проверить" (перевод слова) снова появлялась
        
        if (showWord) {
            setShowWord(false)
        }
        refbtn.current.focus();
       
    }, [words]) //помещаем id слова чтобы useEffect следил за изменениями id слова, и если id изменился то срабатывает условие

   console.log(words);

    return (
        <div>
            <div className={styles.card} key={id} >
                <div className={styles.wrapper}>
                    <p className={styles.word}>{english}</p>
                    <p className={styles.transcription}>{transcription}</p>
                    <button className={styles.div}  ref={refbtn}>
                        {showWord ? <p className={styles.translationWord}>{russian}</p> : <span  onClick={onButtonClick}>Проверить</span> }
                      
                      {/*<Button  ref={refbtn}  onTouch={onButtonClick} >Проверить</Button>*/} 
                    </button>
                </div>
                <p className={styles.learnedAmount}>Выучено в этот раз: <span>{count}</span></p>
            </div>
        </div>
    )
}