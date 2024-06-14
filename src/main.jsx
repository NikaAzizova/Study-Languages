import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './Components/App/App.jsx'
import './styles/index.css'
import { BrowserRouter } from 'react-router-dom'
import { DataContextProvider } from './Context/Context.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <DataContextProvider>
      <App />
    </DataContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
