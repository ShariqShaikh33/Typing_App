import { useState } from 'react'
import './App.css'
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Login from './pages/Login';
import Signup from './pages/Signup';
import {Provider} from "react-redux";
import { store } from './store';
import Test from './pages/Test';

function App() {
  return(
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login/>}> </Route>
          <Route path='/signup' element={<Signup/>}> </Route>
          <Route path="/test" element={<Test/>}></Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  )
}

export default App
