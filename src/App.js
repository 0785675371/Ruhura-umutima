import React from 'react';
import './App.css';
import NavBar from './NavBar';
import Contact from './components/contact/contact';
// import Home from './components/home/Home';
import About from './components/home/About';
import Dashboard from './components/dashboard/Dashboard'
import { Route, Routes } from 'react-router-dom';
import Form from './components/signup/Form';
import Request from './components/home/Request';
function App() {
 
  return (
    <div className='App'>
    <>
      <Routes>
        <Route element={<NavBar/>} path="/" />
        <Route element={<Contact/>} path="/Contact"/>
        <Route element={<Form/>} path="/Signup"/>
        <Route element={<About/>} path="/About"/>
        <Route element={<Dashboard/>} path="/Login"/>
        <Route element={<Request/>} path="/requesting"/>
      </Routes>
    </>
    </div>
  );
}

export default App
