import React, { useState } from 'react';
import styles from './Editing.module.scss';
import done from '../../assets/done.png';
import remove from '../../assets/remove.png';

export default function Editing({ defaultValue }) {
    //const { word, transcription, translation } = props;

    const [deletEditing, setDeletEditing] = useState(true)//удаляем строку со словом при клике на изображение крестика

    const [formState, setFormState] = useState(defaultValue || {
        word: '',
        transcription: '',
        translation: ''
    });

    const handleChange = (e) => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value
        })
    }




    return (


        deletEditing && <> <h3 className={styles.title}>Добавить новое слово</h3>
            <div className={styles.tr}>
                <div className={styles.td}><input className={styles.inputWord} type='text' onChange={handleChange} placeholder={formState.word} /></div>
                <div className={styles.td}><input className={styles.inputWord} type='text' onChange={handleChange} placeholder={formState.transcription} /></div>
                <div className={styles.td}><input className={styles.inputWord} type='text' onChange={handleChange} placeholder={formState.translation} /></div>
                <div className={styles.td}><img className={styles.doneImg} src={done} alt="enter" /><img onClick={() => setDeletEditing(false)} className={styles.removeImg} src={remove} alt="delete" /></div>

            </div></>


    )
}  
