import React, { useState } from "react";
import Header from '../Header/Header.jsx'
import Main from '../Main/Main.jsx'
import Footer from '../Footer/Footer.jsx'
import Card from '../Card/Card.jsx'
import styles from './App.module.scss'
import { englishWords } from '../../words.js';
import Table from '../Table/Table.jsx'
import Editing from '../Editing/Editing.jsx'


function App() {
  const [wordDictionary, setWordDictionary] = useState(englishWords); //отправляем js файл со словами в состояние


  //создаем стрелочную функцию по удалению строчек при клике на крестик
  const handleDeleteRow = (targetIndex) => {
    setWordDictionary(wordDictionary.filter((_, id) => id !== targetIndex))

  }

  const [openEditing, setOpenEditing] = useState(false);
  const openEditingWindow = () => {
    setOpenEditing(true)
  }

  const [editRow, setEditRow] = useState(null);

  const handleEditRow = (id) => {
    setEditRow(id);
    setOpenEditing(true)
  }

  return (
    <>
      <div className={styles.container}>
        <Header />
        <Main />
        <Card />
        {openEditing && <Editing defaultValue={editRow !== null && wordDictionary[editRow]} />}

        <Table wordDictionary={wordDictionary} deleteRow={handleDeleteRow} openEdit={handleEditRow} />


      </div>

    </>
  )
}

export default App
