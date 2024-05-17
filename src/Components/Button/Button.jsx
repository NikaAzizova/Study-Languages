import styles from './Button.module.scss';

export default function Button({children, onTouch}){
   
    return(
        <div>
            <button className={styles.button} onClick={onTouch}>{children}</button>
        </div>
    )
}