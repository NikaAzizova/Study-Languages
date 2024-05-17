import React, { useState } from 'react';
import styles from './AddingNewLine.module.scss';
import done from '../../assets/done.png';


export default function AddingNewLine({ handleNewRow }) {
  
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
        reset();   
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
            handleNewRow(formState);//отправляем состояние с новыми словами в App.jsx в функцию handleNewWordsLine
        }
         
    };


    return (
        <> 
        <h3 className={styles.title}>Добавить новое слово</h3>
            <div className={styles.tr}>
                <div className={styles.td}><input className={styles.inputWord} type='text' onChange={handleChange} name='word' value={formState.word}  placeholder='слово' /></div>
                <div className={styles.td}><input className={styles.inputWord} type='text' onChange={handleChange} name='transcription' value={formState.transcription}  placeholder='транскрипция' /></div>
                <div className={styles.td}><input className={styles.inputWord} type='text' onChange={handleChange} name='translation' value={formState.translation} placeholder='перевод' /></div>
                <div className={styles.td}><img onClick={addNewRow} className={styles.doneImg} src={done} alt="enter" /></div>
              
            </div>
            <div className={styles.blockError}>
            {errors && <div className={styles.error}>{`Please include: ${errors}!`}</div>}
            </div>
            </>



    )
}  
