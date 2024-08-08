import { useEffect, useState } from 'react';
import { BsFillTrashFill, BsFillPencilFill } from "react-icons/bs";
import { IoCheckmarkDoneCircle } from "react-icons/io5";
import styles from './Row.module.scss';

export default function Row({ words }) {
    
    const { id, english, transcription, russian } = words;
    const [openEditing, setOpenEditing] = useState(false);
    const [wordSt, setWordSt] = useState("");
    const [transcriptionWord, setTranscription] = useState("");
    const [translationWord, setTranslationWord] = useState("");


    const [valid, setValid] = useState(false);

    const [wordError, setWordError] = useState("");
    const [transcriptionError, setTranscriptionError] = useState("");
    const [translationError, setTranslationError] = useState('');

    const [wordRed, setWordRed] = useState(false);
    const [transcriptionRed, setTranscriptionRed] = useState(false);
    const [translationRed, setTranslationRed] = useState(false);

    //открываем редактирование
    const handleEditing = (id) => {
        setOpenEditing(id);

    }

    //при изменении слов они будут меняться в состояниях
    useEffect(() => {
        setWordSt(english);
        setTranscription(transcription);
        setTranslationWord(russian);
    }, [words])

    //проверка чтобы сделать кнопку заблокированной в случае ошибок в введеных словах
    useEffect(() => {
        if (wordError || translationError || translationError) {
            setValid(false);

        } else {
            setValid(true);
        }
    }, [wordError, translationError, translationError])


    //Делаем проверку английского слова
    const wordHandler = (e) => {
        setWordSt(e.target.value);
        const reg = /(?:\s|^)[A-Za-z\-\.\_]+(?:\s|$)/; //анл слово

        if (!reg.test(String(e.target.value))) {
            setWordError('Слово введено некорректно!');
            setWordRed(true)

        } else {
            setWordError('');
            setWordRed(false)
        }
    }

    //делаем проверку транскрипции
    const transcriptionHandler = (e) => {
        setTranscription(e.target.value);
        const regTranscript = /\[+[A-Za-zʌ:iɪʊueəɜɔæaɑɒʃθŋðʒɛˈ(r)ɡrɑːs]+\]/;

        if (!regTranscript.test(String(e.target.value))) {
            setTranscriptionError('Слово введено некорректно!');
            setTranscriptionRed(true)

        } else {
            setTranscriptionError('');
            setTranscriptionRed(false)
        }
    }

    //Делаем проверку русского слова
    const translationHandler = (e) => {
        setTranslationWord(e.target.value);
        const regTranslation = /(?:\s|^)[а-яА-Я\-\.\_]+(?:\s|$)/;//русское слово

        if (!regTranslation.test(String(e.target.value))) {
            setTranslationError('Слово введено некорректно!');
            setTranslationRed(true);

        } else {
            setTranslationError('');
            setTranslationRed(false);
        }
    }

    return (
        <>
            <tr className={styles.tr} >
                <td className={styles.td}>
                    <span className={styles.error}>{wordError}</span> {/*Здесь появится инф-я об ошибке*/}
                    {openEditing ? (
                        <input
                            className={wordRed ? styles.inputWordError : styles.inputWord}
                            type="text"
                            value={wordSt}
                            onChange={(e) => wordHandler(e)}
                        />
                    ) : (
                        english
                    )}
                </td>
                <td className={styles.td}>
                    <span className={styles.error}>{transcriptionError}</span>
                    {openEditing ? (
                        <input
                            type="text"
                            className={transcriptionRed ? styles.inputWordError : styles.inputWord}
                            value={transcriptionWord}
                            onChange={(e) => transcriptionHandler(e)}
                        />
                    ) : (
                        transcription
                    )}
                </td>
                <td className={styles.td}>
                    <span className={styles.error}>{translationError}</span> {/*Здесь появится инф-я об ошибке*/}
                    {openEditing ? (
                        <input
                            type="text"
                            className={translationRed ? styles.inputWordError : styles.inputWord}
                            value={translationWord}
                            onChange={(e) => translationHandler(e)}
                        />
                    ) : (
                        russian
                    )}
                </td>
                <td className={styles.td}>
                    {openEditing ? (
                        <button //className={styles.btnSave}
                            disabled={!valid}
                            className={valid ? styles.btnSave : styles.btnDisabled}
                            onClick={() => {
                                setOpenEditing(false)
                            }
                            }>
                            <IoCheckmarkDoneCircle
                                className={styles.doneImg}
                            />
                        </button>
                    ) : (
                        <BsFillPencilFill
                            onClick={() => handleEditing(id)}
                            className={styles.editingImg} disabled
                        />
                    )}

                    <BsFillTrashFill
                        className={styles.removeImg}
                    />
                </td>
            </tr>






        </>
    )
}

