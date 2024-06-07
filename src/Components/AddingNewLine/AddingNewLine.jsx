import React, { useEffect, useState } from 'react';
import styles from './AddingNewLine.module.scss';
import { IoCheckmarkDoneCircle } from "react-icons/io5";



export default function AddingNewLine({ wordDictionary, setWordDictionary}) {

    const [inputWord, setInputWord] = useState("");
    const [inputTranscription, setInputTranscription] = useState("");
    const [inputTranslation, setInputTranslation] = useState("");

    const [wordCondition, setWordCondition] = useState(false);
    const [transcriptionCondition, setTranscriptionCondition] = useState(false);
    const [translationCondition, setTranslationCondition] = useState(false);

    const [wordError, setWordError] = useState('Добавьте английское слово!');
    const [transcriptionError, setTranscriptionError] = useState("Добавьте транскрипцию!");
    const [translationError, setTranslationError] = useState('Добавьте перевод!');

    const [formValid, setFormValid] = useState(false);
    const [wordRed, setWordRed] = useState(false);
    const [transcriptionRed, setTranscriptionRed]=useState(false);
    const [translationRed, setTranslationRed] = useState(false);
    
        console.log(wordRed);
    
   useEffect(()=>{
    if(wordError=='Слово некорректно!'){
        setWordRed(true)
    }else{
        setWordRed(false)
    }

    if(transcriptionError=='Транскрипция слова некорректна!'){
        setTranscriptionRed(true)
    }else{
        setTranscriptionRed(false)
    }

    if(translationError=='Перевод слова некорректен, используйте русские буквы!'){
        setTranslationRed(true)
    }else{
        setTranslationRed(false)
    }


   },[wordError, transcriptionError, translationError])



    useEffect(() => {
        if (wordError || transcriptionError || translationError) {
            setFormValid(false);
        } else {
            setFormValid(true);
        }
    }, [wordError, transcriptionError, translationError])


    const handlerBlur = (e) => {
        switch (e.target.name) {
            case 'word':
                setWordCondition(true);
                break;
            case 'transcription':
                setTranscriptionCondition(true);
                break;
            case 'translation':
                setTranslationCondition(true);
                break;
            default:
                break;
        }
    }

    //Делаем проверку английского слова
    const wordHandler = (e) => {
        setInputWord(e.target.value);
        const reg = /(?:\s|^)[A-Za-z0-9\-\.\_]+(?:\s|$)/; //анл слово


        if (!reg.test(String(e.target.value).trim(e.target.value))) {
            setWordError('Слово некорректно!');

        } else {
            setWordError('');
            setTranscriptionError('');
        }
    }

    //Делаем проверку транскрипции

    const transcriptionHandler = (e) => {
        setInputTranscription(e.target.value);
        //Регулярное выражение для слова из англ букв,
        //для транскрипции пока не найдено. 
        //Включено только что слово должно быть в квадратных скобках,хотя работает и без них
        const regEng = /(?:\[|^)[A-Za-z0-9\-\.\_]+(?:\]|$)/;
      

        if (!regEng.test(String(e.target.value).trim(e.target.value))) {
            setTranscriptionError('Транскрипция слова некорректна!');

        } else {
            setTranscriptionError('');
        }
    }


    //Делаем проверку русского слова
    const translationHandler = (e) => {
        setInputTranslation(e.target.value);
        const regTranslation = /(?:\s|^)[а-яА-Я0-9\-\.\_]+(?:\s|$)/;//русское слово

        if (!regTranslation.test(String(e.target.value).trim(e.target.value))) {
            setTranslationError('Перевод слова некорректен, используйте русские буквы!');

        } else {
            setTranslationError('');
        }
    }

    //добавим новую строчку в слова
    const AddNewRow = () => {
        const id = wordDictionary.length ? wordDictionary[wordDictionary.length - 1].id + 1 : 1;
        const itemRowtoAdd = { word: inputWord, transcription: inputTranscription, translation: inputTranslation, id };
        const updatedList = [...wordDictionary, itemRowtoAdd];
        setWordDictionary(updatedList);
        setInputWord("");
        setInputTranscription("");
        setInputTranslation("");
        console.log("слово: "+inputWord,"транскрипция: "+ inputTranscription,"перевод: "+inputTranslation);
    }

  


    return (
        <>
            <h3 className={styles.title}>Добавить новое слово</h3>
            <div className={styles.tr}>
                <div className={styles.td}><input className={wordRed?styles.inputWordError:styles.inputWord} type='text' onChange={(e) => wordHandler(e)} onBlur={(e) => handlerBlur(e)} name="word" placeholder="word" value={inputWord} /></div>
                <div className={styles.td}><input className={transcriptionRed? styles.inputWordError:styles.inputWord} type='text' onChange={(e) => transcriptionHandler(e)} onBlur={(e) => handlerBlur(e)} name="transcription" placeholder="transcription" value={inputTranscription} /></div>
                <div className={styles.td}><input className={translationRed? styles.inputWordError:styles.inputWord} type='text' onChange={(e) => translationHandler(e)} onBlur={(e) => handlerBlur(e)} name="translation" placeholder="translation" value={inputTranslation} /></div>
                <div className={styles.td}> <button type='submit' disabled={!formValid} onClick={AddNewRow} className={formValid ? styles.btn : styles.btnDisabled} ><IoCheckmarkDoneCircle className={styles.doneImg} /></button></div>

            </div>

            <div className={styles.blockError}>
                {wordCondition && <div className={styles.error}>{wordError}</div>}
                {transcriptionCondition && <div className={styles.error}>{transcriptionError}</div>}
                {translationCondition && <div className={styles.error}>{translationError}</div>}
            </div>
        </>



    )
}  
