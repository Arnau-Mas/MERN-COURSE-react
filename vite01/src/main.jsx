/* l'arxiu main.jsx està en minúscules perquè no retorna cap element visual JSX */
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

/* StrictMode té un bug que et mostra per consola coses duplicades, no alarmar-se ni canviar-ho */
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode> 
    <App />
  </React.StrictMode>
)
