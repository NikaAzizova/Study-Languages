import styles from './Table.module.scss'
import pencil from '../../assets/pencil.png'
import remove from '../../assets/remove.png'

export default function Tables(props) {
    const { word, transcription, translation } = props;
    return (
        <tr className={styles.tr}>
            <td className={styles.td}>{word}</td>
            <td className={styles.td}>{transcription}</td>
            <td className={styles.td}>{translation}</td>
            <td className={styles.td}><img className={styles.editingImg} src={pencil} alt="editing" /> <img className={styles.removeImg} src={remove} alt="remove" /></td>
        </tr>
    )
}