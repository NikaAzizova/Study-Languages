import { Provider } from "mobx-react"
import { observer, inject } from "mobx-react"
import { useState, useEffect } from "react"
import { Route, Routes } from 'react-router-dom'
//import { englishWords } from '../../words.js'
import Header from '../Header/Header.jsx'
import Footer from '../Footer/Footer.jsx'
import { HomePage,GamePage, ErrorPage, TablePage } from '../../Pages';
//import TablePage from "../../Pages/TablePage/TablePage.jsx"
//import  GamePage  from "../../Pages/GamePage/gamePage.jsx"
import styles from './App.module.scss'


const App = inject(["wordStore"])(
  observer(({ wordStore }) => {

  useEffect(() => {
    wordStore.getData();
  }, [])
 
  return (
    <>
      <div className={styles.container}>

        <Header />
        <main>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/table' element={<TablePage />} />
            <Route path='/game' element={<GamePage />} />
            <Route path='*' element={<ErrorPage />} />
          </Routes>
        </main>

        <Footer />
      </div>

    </>
  )
}));

export default App;
/*
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
        <main>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/game' element={<GamePage stateWords={stateWords} />} />
            <Route path='/table' element={<TablePage wordDictionary={wordDictionary} setWordDictionary={setWordDictionary} />} />
            <Route path='*' element={<ErrorPage />} />
          </Routes>
        </main>
     

      </div>

    </>
  )
}

export default App
*/