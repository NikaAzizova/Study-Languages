import Card from "../Card/Card"
import React, { useState } from 'react';
import arrowLeft from '../../assets/arrowLeft.png'
import arrowRight from '../../assets/arrowRight.png'
import styles from './Slider.module.scss'

export default function Slider({ stateWords }) {

    const [countSlider, setCountSlider] = useState(0);
    const wordItem = stateWords;//записываем состояние stateWords в переменную чтобы получить последний индекс обьекта

    //стрелочная функция при помощи которой переключаем слова при клике на стрелочку назад

    const prevSlider = () => {
        setCountSlider(prevState => prevState - 1);
        //прописываем условие, что если countSlider <= 0 то слова начинаются с последнего слова с конца
        if (countSlider <= 0) {
            setCountSlider(prevState => prevState + wordItem.wordDictionary.length)
        }
    }

    //стрелочная функция при помощи которой переключаем слова при клике на стрелочку вперед
    const nextSlider = () => {
        setCountSlider(prevState => prevState + 1);

    }
    //прописываем условие, что если countSlider >= 10 то слова начинаются с первого слова с самого начала. (P.s.: условие не работает в функции nextSlider(), поэтому вынесла наружу функции)

    if (countSlider >= 10) {
        setCountSlider(prevState => prevState - wordItem.wordDictionary.length)
    } 


    return (
        <div className={styles.slider}>
            <div className={styles.sliderContainer}>
                {/* изображение стрелочки влево*/}
                <div className={styles.arrowLeft}>
                    <img onClick={prevSlider} className={styles.arrowLeftImg} src={arrowLeft} alt="стрелка влево" />
                </div>
                {/* сам компонент карточки*/}
                <Card words={stateWords.wordDictionary[countSlider]}/>
                {/* изображение стрелочки вправо*/}
                <div className={styles.arrowRight}>
                    <img onClick={nextSlider} className={styles.arrowRightImg} src={arrowRight} alt="стрелка в право" />
                </div>
            </div>
            {/*номер слова по порядку / общее количество слов*/}
            <div className={styles.amount}>
                <div className={styles.wordAmount}>{countSlider + 1}/{wordItem.wordDictionary.length}</div>
            </div>
        </div>
    )
}