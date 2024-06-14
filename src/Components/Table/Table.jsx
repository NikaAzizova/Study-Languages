import { useContext } from 'react';
import { DataContext } from '../../Context/Context.jsx'
import JSONServices from '../../Services/JSONServices.js';
import AddingNewLine from '../AddingNewLine/AddingNewLine.jsx'
import Row from "../Row/Row.jsx";
import styles from './Table.module.scss'

export default function Table() {

    //получаем данные из Context
    const { data, setData } = useContext(DataContext);
    const { updServ, setUpdServ } = useContext(DataContext);
    //если список слов есть, то получаем последний id из списка слов и увеличиваем на единицу, если список пустой то начинаем с 1
    const dataId =data? data[data.length - 1].id + 1 : 1;
   
    //сохраняем отредактированные слова
    async function handleSave({ id, wordSt, transcriptionWord, translationWord }) {

        //записываем отредактированные слова в объект
        const obj={
            id: dataId,
            english: wordSt,
            russian: translationWord,
            transcription: transcriptionWord,
            tags:'',
            tags_json:"",
            
        }

        //передаем объект слов и id на сервер
        await JSONServices.changeData(obj, id);
        setUpdServ(!updServ); //рендерит страницу

    }
    //Удаляем строку со словами на сервере
    async function handleRemove(id) {
        await JSONServices.deleteData(id)
        setUpdServ(!updServ);
    }


    return (
        <div className={styles.container}>
            <AddingNewLine />
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
                                    {data.map((item) => {
                                        return <Row words={item} key={item.id} handleSave={handleSave} handleRemove={handleRemove} />;
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
