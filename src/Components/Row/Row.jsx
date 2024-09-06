import { useEffect, useState } from 'react';
import { BsFillTrashFill, BsFillPencilFill } from "react-icons/bs";
import { IoCheckmarkDoneCircle } from "react-icons/io5";
import { useDispatch } from 'react-redux';
import { updateWords, deleteWords } from '../../Words/wordsSlice';
import styles from './Row.module.scss';

export default function Row({ words }) {

    const { id, english, transcription, russian } = words;
    const dispatch = useDispatch();

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

    
    const handleEditing = (id) => {
        setOpenEditing(true);
    }

    useEffect(() => {
        setWordSt(english);
        setTranscription(transcription);
        setTranslationWord(russian);
    }, [words])

    useEffect(() => {
        if (wordError || translationError || translationError) {
            setValid(false);

        } else {
            setValid(true);
        }
    }, [wordError, translationError, translationError])



    const wordHandler = (e) => {
        setWordSt(e.target.value);
        const reg = /(?:\s|^)[A-Za-z\-\.\_]+(?:\s|$)/; 

        if (!reg.test(String(e.target.value))) {
            setWordError('Слово введено некорректно!');
            setWordRed(true)

        } else {
            setWordError('');
            setWordRed(false)
        }
    }

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

    const translationHandler = (e) => {
        setTranslationWord(e.target.value);
        const regTranslation = /(?:\s|^)[а-яА-Я,\-\.\_]+(?:\s|$)/;

        if (!regTranslation.test(String(e.target.value))) {
            setTranslationError('Слово введено некорректно!');
            setTranslationRed(true);

        } else {
            setTranslationError('');
            setTranslationRed(false);
        }
    }

    const handleSave = (id) => {

        try {
            dispatch(updateWords({
                id: id,
                english: wordSt,
                transcription: transcriptionWord,
                russian: translationWord,
                tags: '',
                tags_json: '',
            })).unwrap();

        } catch (err) {
            console.log('Words didnt update: ', err);
        }
    }

    const handleDelete = (id) => {
        console.log(id);
        try{
            dispatch(deleteWords({id: id})).unwrap();
        }catch(error){
            console.log('Failed to delete words: ', error);  
        }
    }

    return (
        <>
            <tr className={styles.tr} >
                <td className={styles.td}>
                    <span className={styles.error}>{wordError}</span> 
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
                    <span className={styles.error}>{translationError}</span> 
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
                        <button 
                            disabled={!valid}
                            className={valid ? styles.btnSave : styles.btnDisabled}
                            onClick={() => {
                                setOpenEditing(false)
                            }
                            }>
                            <IoCheckmarkDoneCircle
                                className={styles.doneImg}
                                onClick={() => handleSave(id)}
                            />
                        </button>
                    ) : (
                        <BsFillPencilFill
                            onClick={() => handleEditing(id)}
                            className={styles.editingImg} 
                        />
                    )}

                    <BsFillTrashFill
                        className={styles.removeImg}
                        onClick={() => handleDelete(id)}
                    />
                </td>
            </tr>
        </>
    )
}

