import styles from './Introduction.module.scss';
import img from '../../assets/languages.png';


export default function Introduction() {
    return (
        <div className={styles.container}>
            <div className={styles.blockTitle}>
                <h1 className={styles.title}>Приветствуем, пользователь!</h1>
            </div>
            <div className={styles.details}>
                <div className={styles.blockDescription}>
                    <h2 className={styles.description}>Когда мы решаем что-то сделать и добиваемся успеха, это повышает уверенность в себе, какой бы  маленькой ни была наша победа. Даже способность поддержать короткий разговор с носителем языка может сделать нас более уверенными в себе. Ведь это означает, что мы смогли сделать то, что раньше было для нас невозможным.!</h2>
                </div>

                <div className={styles.blockImage}>
                    <img className={styles.image} src={img} alt="изображение" />
                </div>
            </div>
        </div>
    )
}