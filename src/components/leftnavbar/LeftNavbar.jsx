import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faTv, faPersonRunning, faClapperboard, faSearch } from "@fortawesome/free-solid-svg-icons";
import "./LeftNavbar.css"

const LeftNavbar = () => {
  return (
    <div>
      <div className="leftnavbar">
        
        <Link to="/home" className="leftnavbar-logo" style={{ textDecoration: 'none' }}>
          <div className="logo">
            <FontAwesomeIcon icon={faHouse} />
          </div>
          <div className="text">
            Home
          </div>
        </Link>

        <Link to="/search" className="leftnavbar-logo" style={{ textDecoration: 'none' }}>
          <div className="logo">
            <FontAwesomeIcon icon={faSearch} />
          </div>
          <div className="text">
            Search
          </div>
        </Link>
      
        <Link to="/tvshows" className="leftnavbar-logo" style={{ textDecoration: 'none'}}>
          <div className="logo">
            <FontAwesomeIcon icon={faTv} />    
          </div>
          <div className="text">
            TV Shows
          </div>
        </Link>

        <div className="leftnavbar-logo">
          <div className="logo">
            <FontAwesomeIcon icon={faPersonRunning} />
          </div>
          <div className="text">
            Sports
          </div>
        </div>

        <Link to="/movies" className="leftnavbar-logo" style={{ textDecoration: 'none'}}>
          <div className="logo">
            <FontAwesomeIcon icon={faClapperboard} />
          </div>
          <div className="text">
            Movies
          </div>
        </Link>

      </div>
    </div>
  )
}

export default LeftNavbar
