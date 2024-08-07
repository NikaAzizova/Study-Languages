import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './Components/App/App.jsx'
import './styles/index.css'
import { BrowserRouter } from 'react-router-dom'
import { store } from './Store/Store.js'
import { Provider } from 'react-redux'
import { fetchWords } from './Words/wordsSlice.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
    </BrowserRouter>
  </React.StrictMode>,
)
