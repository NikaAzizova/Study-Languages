import Card from "../Card/Card"
import React, { useEffect,useState } from 'react';
import { useContext } from 'react';
import { DataContext } from '../../Context/Context.jsx'
import arrowLeft from '../../assets/arrowLeft.png'
import arrowRight from '../../assets/arrowRight.png'
import styles from './Slider.module.scss'

export default function Slider({ stateWords }) {
    const data = useContext(DataContext);
    const words = data.data;

    const [countSlider, setCountSlider] = useState(0);
    const wordItem = words;//записываем words в wordItem
   
    const [showWord, setShowWord] = useState(false);// состояние для отрисовки перевода слова, и количества выученных слов, если кликнули на кнопку "проверить", если нет то по умолчанию стоит кнопка и число 0
    
    //стрелочная функция при помощи которой переключаем слова при клике на стрелочку назад
    const prevSlider = () => {
       
        setCountSlider((prevState) => {
            const newCount = prevState <= 0 ? wordItem.length - 1 : prevState - 1;
            console.log();
            return newCount;
        })
    }

    //стрелочная функция при помощи которой переключаем слова при клике на стрелочку вперед
    const nextSlider = () => {
      
        setCountSlider((prevState) => {
            const newCount = prevState >= wordItem.length - 1 ? 0 : prevState + 1;
            console.log(newCount);
            return newCount;
        })
    }



    return (
        <div className={styles.slider}>
            <div className={styles.sliderContainer}>
                {/* изображение стрелочки влево*/}
                <div className={styles.arrowLeft}>
                    <img onClick={prevSlider} className={styles.arrowLeftImg} src={arrowLeft} alt="стрелка влево" />
                </div>
                {/* сам компонент карточки*/}
                <Card words={wordItem[countSlider]} showWord={showWord} setShowWord={setShowWord} />
                {/* изображение стрелочки вправо*/}
                <div className={styles.arrowRight}>
                    <img onClick={nextSlider} className={styles.arrowRightImg} src={arrowRight} alt="стрелка в право" />
                </div>
            </div>
            {/*номер слова по порядку / общее количество слов*/}
            <div className={styles.amount}>
                <div className={styles.wordAmount}>{countSlider + 1}/{wordItem.length}</div>
            </div>
        </div>
    )
}