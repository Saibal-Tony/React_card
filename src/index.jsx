// import { StrictMode } from 'react'
// import './index.css'
// import App from './App.jsx'

import { createRoot } from 'react-dom/client'
import './index.css'
import Main from './components/Main.jsx'
import Header from './components/Header.jsx'


createRoot(document.getElementById('root')).
render(
    <>
        <Header />
        <Main />
    </>
)

