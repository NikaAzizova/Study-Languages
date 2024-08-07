import { useEffect, useState } from 'react';
import { BsFillTrashFill, BsFillPencilFill } from "react-icons/bs";
import { IoCheckmarkDoneCircle } from "react-icons/io5";
import styles from './Row.module.scss';

export default function Row({ words}) {
    //получаем пропсы
    const { id, english, transcription, russian } = words;
    const [openEditing, setOpenEditing] = useState(false);
    const [wordSt, setWordSt] = useState("");
    const [transcriptionWord, setTranscription] = useState("");
    const [translationWord, setTranslationWord] = useState("");

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

    //Проверяем инпуты на наличие в них слов,и чтобы совпадали с регулярным выражением
    const regEng = /(?:\s|^)[A-Za-z0-9\-\.\_]+(?:\s|$)/;;
    const regTranslation = /(?:\s|^)[а-яА-Я0-9\-\.\_]+(?:\s|$)/;//русское слово

    const wordError = [];
    const translationError = [];

    if (!regEng.test(String(wordSt))) {
        wordError.push('Введите слово английскими буквами');

    }

    if (!translationWord.match(regTranslation)) {
        translationError.push('Введите слово русскими буквами');

    }

    return (
        <>
            <tr className={styles.tr} >
                <td className={styles.td}>
                    <span className={styles.error}>{wordError}</span> {/*Здесь появится инф-я об ошибке*/}
                    {openEditing ? (
                        <input
                            className={styles.inputWord}
                            type="text"
                            value={wordSt}
                            onChange={(e) => setWordSt(e.target.value)}
                        />
                    ) : (
                        english
                    )}
                </td>
                <td className={styles.td}>
                    {openEditing ? (
                        <input
                            type="text"
                            className={styles.inputWord}
                            value={transcriptionWord}
                            onChange={(e) => setTranscription(e.target.value)}
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
                            className={styles.inputWord}
                            value={translationWord}
                            onChange={(e) => setTranslationWord(e.target.value)}
                        />
                    ) : (
                        russian
                    )}
                </td>
                <td className={styles.td}>
                    {openEditing ? (
                        <button className={styles.btnSave}
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

