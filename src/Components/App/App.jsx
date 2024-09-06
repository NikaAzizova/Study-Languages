import { Route, Routes } from 'react-router-dom'
import Header from '../Header/Header.jsx'
import Footer from '../Footer/Footer.jsx'
import { HomePage, TablePage, ErrorPage, GamePage } from '../../Pages';
import styles from './App.module.scss'


function App() {

  return (
    <>
      <div className={styles.container}>
        <Header />
        <main className={styles.mainContainer}>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/game' element={<GamePage/>} />
            <Route path='/table' element={<TablePage/>} />
            <Route path='*' element={<ErrorPage />} />
          </Routes>
        </main>
        <Footer />

      </div>

    </>
  )
}

export default App
