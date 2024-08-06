import styles from './Table.module.scss'
import AddingNewLine from '../AddingNewLine/AddingNewLine.jsx'
import { useEffect, useState } from 'react';
import { BsFillTrashFill, BsFillPencilFill } from "react-icons/bs";
import { IoCheckmarkDoneCircle } from "react-icons/io5";
import Row from "../Row/Row.jsx";


export default function Table({ wordDictionary, setWordDictionary }) {

    const [openEditing, setOpenEditing] = useState(false);
    const [wordSt, setWordSt] = useState("");
    const [transcriptionWord, setTranscription] = useState("");
    const [translationWord, setTranslationWord] = useState("");

    //сохраняем отредактированные слова
    function handleSave({ id, wordSt, transcriptionWord, translationWord }) {

        const newDataWords = wordDictionary.map((item) => {
            if (item.id == id) {
                item.word = wordSt;
                item.transcription = transcriptionWord;
                item.translation = translationWord;
                return item;
            }
            return item;
        })
        setWordDictionary(newDataWords);
    }
    //Удаляем строку со словами
    const handleRemove = (id) => {
        setWordDictionary((prevWords) =>
            prevWords.filter((word) => word.id !== id)
        )
    }


    return (
        <div className={styles.container}>
            <AddingNewLine wordDictionary={wordDictionary} setWordDictionary={setWordDictionary} />
            <div className={styles.wordList}>
                <div className={styles.wrapper}>
                    {/* начало таблицы */}
                    <div className={styles.tableWrapper}>
                        <div className={styles.firstLine}>
                            <table className={styles.table}>
                                <thead className={styles.thead}>
                                    <tr className={styles.tr}>
                                        <th className={styles.th}>Word</th>
                                        <th className={styles.th}>Transcription</th>
                                        <th className={styles.th}>Translation</th>
                                        <th className={styles.th}>Editing</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {wordDictionary.map((item) => {
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
                                                    word
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
                                                    translation
                                                )}
                                            </td>
                                            <td className={styles.td}>
                                                {openEditing ? (
                                                    <button className={styles.btnSave}
                                                        onClick={() => {
                                                            setOpenEditing(false),
                                                                handleSave({
                                                                    id,
                                                                    wordSt,
                                                                    transcriptionWord,
                                                                    translationWord
                                                                })
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
                                                    onClick={() => handleRemove(id)}
                                                    className={styles.removeImg}
                                                />
                                            </td>
                                        </tr>

                                        //return <Row wordDictionary={item} key={item.id} handleSave={handleSave} handleRemove={handleRemove} />;
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}
