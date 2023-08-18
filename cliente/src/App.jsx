import { useState } from 'react'
import './App.css'
import {Navbar, Home} from './views/';
import { useLocation } from 'react-router-dom'
import { Route, Routes } from "react-router-dom";

function App() {
  const location = useLocation();
  const isLandingPage = location.pathname === '/';

  return (
    <>
        {<Navbar/>}
        <Routes>
            <Route exact path='/Home' element={<Home/>} />
        </Routes>
    </>
  )
}

export default App;
