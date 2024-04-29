import styles from './Table.module.scss'

export default function Tables(props) {
    const { word, transcription, translation } = props;
    return (
        <tr className={styles.tr}>
            <td className={styles.td}>{word}</td>
            <td className={styles.td}>{transcription}</td>
            <td className={styles.td}>{translation}</td>
            <td className={styles.td}><button>ред</button><button>удал</button></td>
        </tr>
    )
}