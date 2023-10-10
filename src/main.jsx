import React from 'react'
import ReactDOM from 'react-dom/client'
//import App from './App.jsx'
import Data from './components/data/data' // Data.jsx hereda informacion a su hijo App.jsx
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Data />
  </React.StrictMode>,
)
