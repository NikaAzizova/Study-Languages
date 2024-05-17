import React, { useEffect, useState } from "react";
import Header from '../Header/Header.jsx'
import Main from '../Main/Main.jsx'
import Footer from '../Footer/Footer.jsx'
import styles from './App.module.scss'
import { englishWords } from '../../words.js';
import Table from '../Table/Table.jsx'
import AddingNewLine from '../AddingNewLine/AddingNewLine.jsx'
import Slider from "../Slider/Slider.jsx";


function App() {
  
  //отправим слова в localSrorage
  const JsonStringyfyWords = JSON.stringify(englishWords)
  localStorage.setItem('wordsItem', JsonStringyfyWords);
  //получим слова из localStorage
  const wordsFromLocalStorage = JSON.parse(localStorage.getItem('wordsItem'));


  const [wordDictionary, setWordDictionary] = useState(wordsFromLocalStorage); //отправляем слова в состояние
  const [rowToEdit, setRowToEdit] = useState(null);
  const [editID, setEditID] = useState(-1);//в состояние получаем ID слова, по умолчанию стоят -1
  
  {/*
const [wordDictionary, setWordDictionary] = useState([]);
console.log(wordDictionary);
useEffect(()=>{
setWordDictionary(JSON.parse(localStorage.getItem('wordsItem')));
},[]);
*/}

  //отправляем слова в Slider
  const stateWords = { wordDictionary, setWordDictionary };


  //создаем стрелочную функцию по удалению строчек из состояния wordDictionary со словами при клике на крестик
  const handleDeleteRow = (targetIndex) => {
    setWordDictionary(wordDictionary.filter((_, idx) => idx !== targetIndex))

  }

  const handleEditRow = (idx) => {
    setEditID(idx); //помещаем index слова
  }

  const handleNewWordsLine = (newRow) => { //сюда придут новые слова, и уйдут в состояние wordDictionary со всеми словами
    setWordDictionary([...wordDictionary, newRow])
  }

  //создадим функцию чтобы при клике сделать setID обратно с прежним значением -1, и закрыть редактирование с инпутами
  const closeEditingWindow = () => {
    setEditID(-1);
  }
  return (
    <>
      <div className={styles.container}>

        <Header />
        <Main />
        <Slider stateWords={stateWords} />
        <AddingNewLine handleNewRow={handleNewWordsLine} />
        <Table wordDictionary={wordDictionary} stateWordDictionary={setWordDictionary} deleteRow={handleDeleteRow} openEdit={handleEditRow} setID={editID} closeEditingWindow={closeEditingWindow} />

      </div>

    </>
  )
}

export default App
