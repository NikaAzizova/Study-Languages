import styles from './Table.module.scss'
import AddingNewLine from '../AddingNewLine/AddingNewLine.jsx'
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import {  selectAllWords, getWordsError, getWordsStatus, fetchWords } from '../../Words/wordsSlice.js';
import Row from "../Row/Row.jsx";


export default function Table() {

    const dispatch = useDispatch();
    const words = useSelector(selectAllWords)
    const wordsStatus = useSelector(getWordsStatus);
    const error = useSelector(getWordsError);


    useEffect(() => {
        if (wordsStatus === 'idle') {
            dispatch(fetchWords())
        }
    }, [dispatch, wordsStatus]);

    let loading;

    if (wordsStatus === 'loading') {
       loading = <div className={styles.loading}>Идет загрузка слов....</div>
    }
    else if (wordsStatus === 'succeeded') {
        console.log('succeeded');  
    }
    else if (wordsStatus === 'failed') {
        return <div>{error}...</div>
    }

    return (
        <div className={styles.container}>
            <AddingNewLine />
            <div className={styles.wordList}>
            {loading}
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
                                
                                    {words.map(item => { return <Row words={item} key={item.id} /> })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}
