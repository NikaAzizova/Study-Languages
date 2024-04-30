import styles from './Editing.module.scss';
import done from '../../assets/done.png';
import remove from '../../assets/remove.png';

export default function Editing(props) {
    const { word, transcription, translation } = props;
    return (
        <tr>
            <td className={styles.td}><input className={styles.inputWord} type='text' placeholder={word} /></td>
            <td className={styles.td}><input className={styles.inputWord} type='text' placeholder={transcription} /></td>
            <td className={styles.td}><input className={styles.inputWord} type='text' placeholder={translation} /></td>
            <td className={styles.td}><img className={styles.doneImg} src={done} alt="enter"/><img className={styles.removeImg} src={remove} alt="delete" /></td>

        </tr>
    )
}