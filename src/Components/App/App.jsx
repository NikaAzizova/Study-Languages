import Header from '../Header/Header.jsx'
import Main from '../Main/Main.jsx'
import Footer from '../Footer/Footer.jsx'
import WordList from '../WordList/WordList.jsx'
import Card from '../Card/Card.jsx'
import styles from './App.module.scss'
import { englishWords } from '../../words.js';

function App() {


  return (
    <>
      <div className={styles.container}>
        <Header />
        <Main />
        <Card />
<WordList/>
       {/* {englishWords.map((item) => {
          return <WordList key={item.id} item={item} />
        })}*/}

      </div>

      {/* <div className='page-two'>
      <Header />
      <Card 
      word='measure'
      transcription='ˈmeʒər'
      />
      <Footer />
      </div> */}

    </>
  )
}

export default App
