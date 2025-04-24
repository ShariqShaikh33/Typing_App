import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './components/App.jsx'
import './index.css'
import Test from './components/Test.jsx'
import Result from './components/Result.jsx'

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App/>}/>
        <Route path="test" element={<Test/>}/>
        <Route path="result" element={<Result/>}/>
        
      </Routes>
    </BrowserRouter>
    
    
    
    
    
)
