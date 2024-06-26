import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './Components/App/App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'mobx-react'
import ObservableWordStore from './WordStore/WordStore.js'
import './styles/index.css'

const stores = { wordStore: new ObservableWordStore() };

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider {...stores}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
)
