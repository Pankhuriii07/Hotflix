import { useState } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import './App.css'


import Navbar from './components/navbar/Navbar'
import LeftNavbar from './components/leftnavbar/LeftNavbar'
import SearchShows from './components/searchroutelist/SearchShows'
import MovieRoute from './Pages/movies/MovieRoute'
import SignUp from './Pages/SignUp/Signup'
import HomePage from './Pages/home/HomePage'
import Tv from './Pages/tv/Tv'

function App() {

  return (
    <>
      <div className='leftnavbar-app'>
        <LeftNavbar />
      </div>
      <div className='content-app'>
        <Routes>
          <Route path='/' element={<Navigate to='/search' replace />} />
          <Route
            path='/search'
            element={
              <>
                <div className='navbar-app'>
                  <Navbar />
                </div>
                <div className='search-shows-app'>
                  <SearchShows />
                </div>
              </>
            }
          />
          <Route path='/movies' element={<MovieRoute />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/home' element={<HomePage />} /> 
          <Route path='/tvshows' element={<Tv />} /> 
        </Routes>
      </div>
    </>
  )
}

export default App
