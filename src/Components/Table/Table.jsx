import { useState } from "react";
import styles from './Table.module.scss'
import pencil from '../../assets/pencil.png'
import remove from '../../assets/remove.png'
import done from '../../assets/done.png';
import AddingNewLine from '../AddingNewLine/AddingNewLine.jsx'


export default function Table({wordDictionary,setWordDictionary}) {
    
    const [editID, setEditID] = useState(-1);//в состояние получаем ID слова, по умолчанию стоят -1

    const openEditingWindow = (idx) => {
        setEditID(idx); //помещаем index слова
    }

    //создадим функцию чтобы при клике сделать setID обратно с прежним значением -1, и закрыть редактирование с инпутами
    const closeEditingWindow = () => {
        setEditID(-1);
    }

    //создаем стрелочную функцию по удалению строчек из состояния wordDictionary со словами при клике на крестик
    const handleDeleteRow = (targetIndex) => {
        setWordDictionary(wordDictionary.filter((_, idx) => idx !== targetIndex))

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
                                    {wordDictionary.map((item, idx) => {
                                        {/*Ниже пишем условный рендеринг чтобы открыть вкладку редактирования, либо закрыть ее*/ }
                                        return (
                                            idx === editID /*setID*/ ?
                                                <tr key={idx} className={styles.tr}>
                                                    <td className={styles.td}><input className={styles.inputEditWord} name="word" type="text" placeholder={item.word} /></td>
                                                    <td className={styles.td}><input className={styles.inputEditWord} name="transcription" type="text" placeholder={item.transcription} /></td>
                                                    <td className={styles.td}><input className={styles.inputEditWord} name="translation" type="text" placeholder={item.translation} /></td>
                                                    <td className={styles.td}>
                                                        <img className={styles.doneImg} src={done} alt="enter" />
                                                        <img onClick={closeEditingWindow} className={styles.removeImg} src={remove} alt="remove" />
                                                    </td>
                                                </tr> :
                                                <tr key={idx} className={styles.tr}>
                                                    <td className={styles.td}>{item.word}</td>
                                                    <td className={styles.td}>{item.transcription}</td>
                                                    <td className={styles.td}>{item.translation}</td>
                                                    <td className={styles.td}>
                                                        <img onClick={() => openEditingWindow(idx)} className={styles.editingImg} src={pencil} alt="editing" />
                                                        <img onClick={() => handleDeleteRow(idx)} className={styles.removeImg} src={remove} alt="remove" />
                                                    </td>
                                                </tr>

                                        )
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
