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
 
 
  //отправляем слова в Slider
  const stateWords = { wordDictionary, setWordDictionary };

  return (
    <>
      <div className={styles.container}>

        <Header />
        <Main />
        <Slider stateWords={stateWords} />
        <AddingNewLine wordDictionary={wordDictionary} setWordDictionary={setWordDictionary} />
        <Table wordDictionary={wordDictionary} setWordDictionary={setWordDictionary} />

      </div>

    </>
  )
}

export default App
