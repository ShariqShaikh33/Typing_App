import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './components/App.jsx'
import './index.css'
import Test from './components/Test.jsx'
import Result from './components/Result.jsx'
import Timertest from './components/Timertest.jsx'

import { Provider } from 'react-redux'
import { store } from './redux/store.js'


createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App/>}/>
        <Route path="test" element={<Test/>}/>
        <Route path="timer-test" element={<Timertest/>}/>
        <Route path="result" element={<Result/>}/>
        
      </Routes>
    </BrowserRouter>

  </Provider>
    
    
    
    
    
)
