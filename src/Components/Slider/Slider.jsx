import Card from "../Card/Card"
import React, { useEffect, useState } from 'react';
import arrowLeft from '../../assets/arrowLeft.png'
import arrowRight from '../../assets/arrowRight.png'
import styles from './Slider.module.scss'
import { observer, inject } from "mobx-react";


const Slider = inject(['wordStore'])(observer(({ wordStore }) => {

    useEffect(() => {
        wordStore.getData();
      }, [])

      console.log(wordStore);
    const [countSlider, setCountSlider] = useState(0);
    // const wordItem = stateWords;//записываем состояние stateWords в переменную чтобы получить последний индекс обьекта
    const [showWord, setShowWord] = useState(false);// состояние для отрисовки перевода слова, и количества выученных слов, если кликнули на кнопку "проверить", если нет то по умолчанию стоит кнопка и число 0
   
     console.log(wordStore.words);
    //стрелочная функция при помощи которой переключаем слова при клике на стрелочку назад
    const prevSlider = () => {

        setCountSlider((prevState) => {
            const newCount = prevState <= 0 ? wordStore.words.length - 1 : prevState - 1;
            return newCount;
        })
    }

    //стрелочная функция при помощи которой переключаем слова при клике на стрелочку вперед
    const nextSlider = () => {

        setCountSlider((prevState) => {
            const newCount = prevState >= wordStore.words.length - 1 ? 0 : prevState + 1;
            console.log(newCount);
            return newCount;
        })
    }


    return (
        <div className={styles.slider}>
            <div className={styles.sliderContainer}>
                {/* изображение стрелочки влево}*/}
                <div className={styles.arrowLeft}>

                    <img onClick={prevSlider} 
                    className={styles.arrowLeftImg} 
                    src={arrowLeft} 
                    alt="стрелка влево" />

                </div>
                {/* сам компонент карточки}*/}

                <Card 
                words={wordStore.words[countSlider]}  
                showWord={showWord} 
                setShowWord={setShowWord} />

                {/* изображение стрелочки вправо*/}
                <div className={styles.arrowRight}>

                    <img onClick={nextSlider} 
                    className={styles.arrowRightImg} 
                    src={arrowRight} 
                    alt="стрелка в право" />
                    
                </div>
            </div>
            {/*номер слова по порядку / общее количество слов*/}
            <div className={styles.amount}>
                <div className={styles.wordAmount}>{countSlider + 1}/{wordStore.words.length}</div>
            </div>
        </div>
    )

}))

export default Slider;
/*
export default function Slider({ stateWords }) {
  
    const [countSlider, setCountSlider] = useState(0);
    const wordItem = stateWords;//записываем состояние stateWords в переменную чтобы получить последний индекс обьекта
  //  const [showWord, setShowWord] = useState(false);// состояние для отрисовки перевода слова, и количества выученных слов, если кликнули на кнопку "проверить", если нет то по умолчанию стоит кнопка и число 0
    
    //стрелочная функция при помощи которой переключаем слова при клике на стрелочку назад
    const prevSlider = () => {
       
        setCountSlider((prevState) => {
            const newCount = prevState <= 0 ? wordItem.wordDictionary.length - 1 : prevState - 1;
            console.log();
            return newCount;
        })
    }

    //стрелочная функция при помощи которой переключаем слова при клике на стрелочку вперед
    const nextSlider = () => {
      
        setCountSlider((prevState) => {
            const newCount = prevState >= wordItem.wordDictionary.length - 1 ? 0 : prevState + 1;
            console.log(newCount);
            return newCount;
        })
    }



    return (
        <div className={styles.slider}>
            <div className={styles.sliderContainer}>
                {/* изображение стрелочки влево}*/
/* <div className={styles.arrowLeft}>
     <img onClick={prevSlider} className={styles.arrowLeftImg} src={arrowLeft} alt="стрелка влево" />
 </div>
 {/* сам компонент карточки}/*
 <Card words={stateWords.wordDictionary[countSlider]} /*showWord={showWord} setShowWord={setShowWord} />*/
/*{ изображение стрелочки вправо}/*
<div className={styles.arrowRight}>
    <img onClick={nextSlider} className={styles.arrowRightImg} src={arrowRight} alt="стрелка в право" />
</div>
</div>
{/*номер слова по порядку / общее количество слов}/*
<div className={styles.amount}>
<div className={styles.wordAmount}>{countSlider + 1}/{wordItem.wordDictionary.length}</div>
</div>
</div>
)
}*/