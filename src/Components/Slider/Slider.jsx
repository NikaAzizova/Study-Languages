import Card from "../Card/Card"
import React, { useEffect, useState } from 'react';
import arrowLeft from '../../assets/arrowLeft.png'
import arrowRight from '../../assets/arrowRight.png'
import styles from './Slider.module.scss'
import { useSelector, useDispatch } from "react-redux";
import { selectAllWords, getWordsError, getWordsStatus, fetchWords } from '../../Words/wordsSlice.js';

export default function Slider() {
    const dispatch = useDispatch();
    const words = useSelector(selectAllWords)
    const wordsStatus = useSelector(getWordsStatus);
    const error = useSelector(getWordsError);
    console.log(words);

    ////////////////////////////
    const [countSlider, setCountSlider] = useState(0);
    const [showWord, setShowWord] = useState(false);// состояние для отрисовки перевода слова, и количества выученных слов, если кликнули на кнопку "проверить", если нет то по умолчанию стоит кнопка и число 0

    //стрелочная функция при помощи которой переключаем слова при клике на стрелочку назад
    const prevSlider = () => {

        setCountSlider((prevState) => {
            const newCount = prevState <= 0 ? words.length - 1 : prevState - 1;
            console.log();
            return newCount;
        })
    }

    //стрелочная функция при помощи которой переключаем слова при клике на стрелочку вперед
    const nextSlider = () => {

        setCountSlider((prevState) => {
            const newCount = prevState >= words.length - 1 ? 0 : prevState + 1;
            console.log(newCount);
            return newCount;
        })
    }

    ///////////////////////////////////
    useEffect(() => {
        if (wordsStatus === 'idle') {
            dispatch(fetchWords())
        }
    }, [dispatch, wordsStatus]);



    if (wordsStatus === 'loading') {
        return <div className={styles.loading}>Идет загрузка слов....</div>
    } if (!words || words.length === 0) {
        return <div className={styles.loading}>No words available...</div>
    }
    else if (wordsStatus === 'succeeded') {
        console.log('succeeded');

    }
    else if (wordsStatus === 'failed') {
        return <div>{error}...</div>
    }
    
    
    return (
        <div className={styles.slider}>
            <div className={styles.sliderContainer}>
                {/* изображение стрелочки влево*/}
                <div className={styles.arrowLeft}>
                    <img onClick={prevSlider} className={styles.arrowLeftImg} src={arrowLeft} alt="стрелка влево" />
                </div>
                {/* сам компонент карточки*/}
                <Card words={words[countSlider]} showWord={showWord} setShowWord={setShowWord} />
                {/* изображение стрелочки вправо*/}
                <div className={styles.arrowRight}>
                    <img onClick={nextSlider} className={styles.arrowRightImg} src={arrowRight} alt="стрелка в право" />
                </div>
            </div>
            {/*номер слова по порядку / общее количество слов*/}
            <div className={styles.amount}>
                <div className={styles.wordAmount}>{countSlider + 1}/{words.length}</div>
            </div>
        </div>
    )
}