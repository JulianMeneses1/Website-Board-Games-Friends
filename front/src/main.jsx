import React from 'react'
import ReactDOM from 'react-dom/client'
import { BGFApp } from './BGFApp.jsx'
import './styles/styles.css'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>  
    <BGFApp />
  </BrowserRouter>
)
