import styles from './WordList.module.scss';


export default function WordList(props) {
    const { word, transcription, translation } = props.item;
    return (
        <div className={styles.wordList}>
            <div className={styles.wrapper}>
                <div className={styles.input} type="text">{word} </div>
                <div className={styles.input} type="text"> {transcription}</div>
                <div className={styles.input} type="text">{translation} </div>
                <div className={styles.blockButtons}></div>
                <button className={styles.button}>редактировать</button>
                <button className={styles.button}>удалить</button>
            </div>

        </div>
    )
}