import React from 'react';
import styles from './WordList.module.scss';
import Editing from '../Editing/Editing.jsx';
import Table from '../Table/Table.jsx';
import { englishWords } from '../../words.js';

export default function WordList() {


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
                {englishWords.map((item) => {

                  return (
                    <React.Fragment>
                      {item.changes ? <Table keys={item.id} word={item.word} transcription={item.transcription} translation={item.translation} changes={item.changes} /> : <Editing keys={item.id} word={item.word} transcription={item.transcription} translation={item.translation} changes={item.changes} />}
                    </React.Fragment>
                  )

                })}


                {/* <Table /> */}
              </tbody>




            </table>
          </div>
        </div>
        {/* конец таблицы */}

        {/*  <div className={styles.input}>{word} </div>
                <div className={styles.input}> {transcription}</div>
                <div className={styles.input}>{translation} </div>
                <div className={styles.blockButtons}></div>
                <button className={styles.button}>редактировать</button>
                <button className={styles.button}>удалить</button>*/}
      </div>

    </div>
  )
}