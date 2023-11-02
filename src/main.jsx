import React from 'react'
import ReactDOM from 'react-dom/client'
import Router from './Router.jsx'
import './css/index.css'
import { BrowserRouter } from "react-router-dom"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  </React.StrictMode>
)
