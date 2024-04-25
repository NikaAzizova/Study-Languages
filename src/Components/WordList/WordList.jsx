import styles from './WordList.module.scss';


export default function WordList(props) {
    const { word, transcription, translation } = props.item;
    return (
        <div className={styles.wordList}>
            <div className={styles.wrapper}>
                <input className={styles.input} type="text" placeholder={word} />
                <input className={styles.input} type="text" placeholder={transcription} />
                <input className={styles.input} type="text" placeholder={translation} />
                <div className={styles.blockButtons}></div>
                <button className={styles.button}>редактировать</button>
                <button className={styles.button}>удалить</button>
            </div>

        </div>
    )
}