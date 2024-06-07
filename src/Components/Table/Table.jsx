import styles from './Table.module.scss'
import AddingNewLine from '../AddingNewLine/AddingNewLine.jsx'
import Row from "../Row/Row.jsx";


export default function Table({ wordDictionary, setWordDictionary }) {

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
                                        return <Row wordDictionary={item} key={item.id} handleSave={handleSave} handleRemove={handleRemove} />;
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
