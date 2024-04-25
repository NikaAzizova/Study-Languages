import styles from './Button.module.scss';

export default function Button(props){
    return(
        <div>

            <button className={styles.button}>{props.name}</button>
        </div>
    )
}