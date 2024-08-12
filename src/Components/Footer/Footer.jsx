import styles from './Footer.module.scss'

export default function Footer(){
    return(
            <footer className={styles.footer}>
                <div className={styles.wrapper}>
                    <p className={styles.footertext}>Разработано: @Del_Luna04</p>
                </div>
            </footer>
       
    )
}