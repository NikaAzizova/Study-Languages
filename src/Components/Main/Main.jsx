import styles from './Main.module.scss';
import Introduction from '../Introduction/Introduction.jsx';
//import Card from '../Card/Card';

export default function Main(){
    return(
       
           
            <main className={styles.main}>

                <Introduction/>
            
            </main>
    
    )
}