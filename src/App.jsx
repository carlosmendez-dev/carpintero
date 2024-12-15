import './App.css'
import * as React from "react";
import Dashboard from './pages/Dashboard';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/carpintero/dashboard' element={<Dashboard></Dashboard>}></Route>
        <Route path='/carpintero/' element={<Login></Login>}></Route>
        <Route path='/carpintero/login' element={<Login></Login>}></Route>
        <Route path='/carpintero/register' element={<Register></Register>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
