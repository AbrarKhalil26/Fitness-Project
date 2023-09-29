import React from 'react'
import './App.css'

import { Route, Routes, BrowserRouter } from "react-router-dom";
import { Box } from '@mui/material';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ExerciseDetail from './Pages/ExerciseDetail';
import Home from './Pages/Home';

const App = () => {
  return (
      <Box width='400px' sx={{width: {xl: '148px'}}} m='auto'>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/exercise/:id' element={<ExerciseDetail />}/>
        </Routes>
        <Footer/>
      </Box>
  )
}

export default App
