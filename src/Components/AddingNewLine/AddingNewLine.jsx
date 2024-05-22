import React, { useState } from 'react';
import styles from './AddingNewLine.module.scss';
import done from '../../assets/done.png';


export default function AddingNewLine({wordDictionary,setWordDictionary ,handleNewRow }) {
  
    const [errors, setErrors]=useState(""); 
    const [formState, setFormState] = useState({
        word: "",
        transcription: "",
        translation: "",
    });

    const handleChange = (e) => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value,
        });  
          
    };

   

    const addNewRow = () => { // добавляем новый ряд слов
        if(!formState.word && !formState.transcription && !formState.translation){ //если слов нет, то они не добавятся в новую строку  
            let errorField =[];
              for(const[key,value] of Object.entries(formState)){
                if(!value){
                    errorField.push(key)
                }
              }
              setErrors(errorField.join(", "))
            return;
        } else{
            setErrors("");
           // handleNewRow(formState);//отправляем состояние с новыми словами в App.jsx в функцию handleNewWordsLine

            handleNewWordsLine(formState)
        }
         
    };

    const handleNewWordsLine = (newRow) => { //сюда придут новые слова, и уйдут в состояние wordDictionary со всеми словами
        setWordDictionary([...wordDictionary, newRow])
      }
   

    return (
        <> 
        <h3 className={styles.title}>Добавить новое слово</h3>
            <div className={styles.tr}>
                <div className={styles.td}><input className={styles.inputWord} type='text' onChange={handleChange} name='word' value={formState.word}  placeholder='word' /></div>
                <div className={styles.td}><input className={styles.inputWord} type='text' onChange={handleChange} name='transcription' value={formState.transcription}  placeholder='transcription' /></div>
                <div className={styles.td}><input className={styles.inputWord} type='text' onChange={handleChange} name='translation' value={formState.translation} placeholder='translation' /></div>
                <div className={styles.td}><img onClick={addNewRow} className={styles.doneImg} src={done} alt="enter" /></div>
              
            </div>
            <div className={styles.blockError}>
            {errors && <div className={styles.error}>{`Please include: ${errors}!`}</div>}
            </div>
            </>



    )
}  
