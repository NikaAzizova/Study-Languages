import styles from './Editing.module.scss'

export default function Editing(props) {
    const { word, transcription, translation } = props;
    return (
        <tr>
            <td className={styles.td}><input className={styles.inputWord} type='text' placeholder={word} /></td>
            <td className={styles.td}><input className={styles.inputWord} type='text' placeholder={transcription} /></td>
            <td className={styles.td}><input className={styles.inputWord} type='text' placeholder={translation} /></td>
            <td className={styles.td}><button>ред</button></td>

        </tr>
    )
}