import Header from './Header/Header.jsx'
import Main from './Main/Main.jsx'
import Footer from './Footer/Footer'
import Card from './Card/Card.jsx'

import '../styles/App.css'

function App() {


  return (
    <>
      <div className='page-one'>
        <Header />
        <Main />
        <Footer />
      </div>

      <div className='page-two'>
      <Header />
      <Card 
      word='measure'
      transcription='ˈmeʒər'
      />
      <Footer />
      </div>

    </>
  )
}

export default App
