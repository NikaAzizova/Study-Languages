import styles from './ErrorPage.module.scss'

export default function Error() {
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <div className={styles.number}>404</div>
                <div className={styles.text}>Not Found</div>
                <div className={styles.secondText}>You must have picked the wrong door because I haven't been able to lay my eye on the page you've been searching for.</div>
            </div>
        </div>
    )
}