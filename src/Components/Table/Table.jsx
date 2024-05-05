import React, { useState } from "react";
import styles from './Table.module.scss'
import pencil from '../../assets/pencil.png'
import remove from '../../assets/remove.png'
import done from '../../assets/done.png';


export default function Table({ wordDictionary, deleteRow, openEdit }) {

    return (

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
                                {wordDictionary.map((item, id) => {
                                    return (

                                        <tr key={id} className={styles.tr}>
                                            <td className={styles.td}>{item.word}</td>
                                            <td className={styles.td}>{item.transcription}</td>
                                            <td className={styles.td}>{item.translation}</td>
                                            <td className={styles.td}>
                                                <img onClick={()=>openEdit(id)} className={styles.editingImg} src={pencil} alt="editing" />
                                                <img onClick={() => deleteRow(id)} className={styles.removeImg} src={remove} alt="remove" />
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

    )
}
/*
{openEditing? <tr>
            <td className={styles.td}><input className={styles.inputWord} type='text' placeholder={word} /></td>
            <td className={styles.td}><input className={styles.inputWord} type='text' placeholder={transcription} /></td>
            <td className={styles.td}><input className={styles.inputWord} type='text' placeholder={translation} /></td>
            <td className={styles.td}><img className={styles.doneImg} src={done} alt="enter"/><img onClick={()=>setDeletEditing(false)} className={styles.removeImg} src={remove} alt="delete" /></td>

        </tr>: <tr key={id} className={styles.tr}>
        <td className={styles.td}>{item.word}</td>
        <td className={styles.td}>{item.transcription}</td>
        <td className={styles.td}>{item.translation}</td>
        <td className={styles.td}>
            <img className={styles.editingImg} src={pencil} alt="editing" />
            <img onClick={()=>deleteRow(id)}  className={styles.removeImg} src={remove} alt="remove" />
        </td>
    </tr>}
*/
