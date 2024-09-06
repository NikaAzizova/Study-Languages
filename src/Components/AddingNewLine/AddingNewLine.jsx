import React, { useEffect, useState } from 'react';
import styles from './AddingNewLine.module.scss';
import { IoCheckmarkDoneCircle } from "react-icons/io5";
import { useSelector, useDispatch } from "react-redux";
import { selectAllWords, getWordsStatus, fetchWords, addNewWords } from '../../Words/wordsSlice.js';



export default function AddingNewLine() {
    const dispatch = useDispatch();
    const words = useSelector(selectAllWords);
    const wordsStatus = useSelector(getWordsStatus);

    useEffect(() => {
        if (wordsStatus === 'idle') {
            dispatch(fetchWords())
        }
    }, [dispatch, wordsStatus]);

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
    const [transcriptionRed, setTranscriptionRed] = useState(false);
    const [translationRed, setTranslationRed] = useState(false);



    useEffect(() => {
        if (wordError == 'Слово некорректно!') {
            setWordRed(true)
        } else {
            setWordRed(false)
        }

        if (transcriptionError == 'Транскрипция слова некорректна!') {
            setTranscriptionRed(true)
        } else {
            setTranscriptionRed(false)
        }

        if (translationError == 'Перевод слова некорректен, используйте русские буквы!') {
            setTranslationRed(true)
        } else {
            setTranslationRed(false)
        }
    }, [wordError, transcriptionError, translationError])

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

    const wordHandler = (e) => {
        setInputWord(e.target.value);
        const reg = /(?:\s|^)[A-Za-z\-\.\_]+(?:\s|$)/;

        if (!reg.test(String(e.target.value))) {
            setWordError('Слово некорректно!');

        } else {
            setWordError('');
            setTranscriptionError('');
        }
    }

    const transcriptionHandler = (e) => {
        setInputTranscription(e.target.value);
        const regTranscript = /\[+[A-Za-zʌ:iɪʊueəɜɔæaɑɒʃθŋðʒɛˈ(r)ɡrɑːs]+\]/;

        if (!regTranscript.test(String(e.target.value))) {
            setTranscriptionError('Транскрипция слова некорректна!');

        } else {
            setTranscriptionError('');
        }
    }

    const translationHandler = (e) => {
        setInputTranslation(e.target.value);
        const regTranslation = /(?:\s|^)[а-яА-Я\-\.\_]+(?:\s|$)/;//русское слово

        if (!regTranslation.test(String(e.target.value))) {
            setTranslationError('Перевод слова некорректен, используйте русские буквы!');

        } else {
            setTranslationError('');
        }
    }

    const AddNewRow = () => {
        const amountOfWords = words.length - 1;
        const lastWord = words[amountOfWords];
        const newId = Number(lastWord.id) + 1;

        const newWords = {
            id: String(newId),
            english: inputWord,
            transcription: inputTranscription,
            russian: inputTranslation,
            tags: '',
            tags_json: '',
        }


        try {
            dispatch(addNewWords(newWords)).unwrap();
        } catch (err) {
            console.log("Failed to save the post: ", err);
        }

        setInputWord("");
        setInputTranscription("");
        setInputTranslation("");
        setFormValid(false);
        console.log(newWords);
    }

    return (
        <>
            <h3 className={styles.title}>Добавить новое слово</h3>
            <div className={styles.wrapper}>
                <div className={styles.tr}>
                    <div className={styles.td}>
                        <input
                            className={wordRed ? styles.inputWordError : styles.inputWord}
                            type='text'
                            onChange={(e) => wordHandler(e)}
                            onBlur={(e) => handlerBlur(e)}
                            name="word"
                            placeholder="word"
                            value={inputWord}
                        /></div>
                    <div className={styles.td}>
                        <input
                            className={transcriptionRed ?
                                styles.inputWordError : styles.inputWord}
                            type='text'
                            onChange={(e) => transcriptionHandler(e)}
                            onBlur={(e) => handlerBlur(e)}
                            name="transcription"
                            placeholder="transcription"
                            value={inputTranscription}
                        /></div>
                    <div className={styles.td}>
                        <input
                            className={translationRed ? styles.inputWordError : styles.inputWord}
                            type='text'
                            onChange={(e) => translationHandler(e)}
                            onBlur={(e) => handlerBlur(e)}
                            name="translation"
                            placeholder="translation"
                            value={inputTranslation}
                        /></div>
                    <div className={styles.td}>
                        <button
                            type='submit'
                            disabled={!formValid}
                            onClick={AddNewRow}
                            className={formValid ? styles.btn : styles.btnDisabled} >
                            <IoCheckmarkDoneCircle
                                className={styles.doneImg}
                            />
                        </button></div>

                </div>
                <div className={styles.blockError}>
                    {wordCondition && <div className={styles.error}>{wordError}</div>}
                    {transcriptionCondition && <div className={styles.error}>{transcriptionError}</div>}
                    {translationCondition && <div className={styles.error}>{translationError}</div>}
                </div>
            </div>
        </>



    )
}  
