import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom'
import "./Navbar.css"

const Navbar = () => {
  return (
    <div>
      <div className="navbar-search" style={{display:"flex"}}>
        <form action="">
          <input type="text" placeholder='Movies, Shows, and more...' />
          <button type='submit' style={{border: "none",position: "relative",bottom:'55px'}}>
            <FontAwesomeIcon icon={faMagnifyingGlass} className='search-icon' /> 
          </button>
        </form>
        <Link to="/signup" style={{ textDecoration: 'none' }}>
          <button className='navbar-signup'>Login</button>
        </Link>
      </div>    
    </div>
  )
}

export default Navbar
