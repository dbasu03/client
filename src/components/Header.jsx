import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {FaBars} from "react-icons/fa"
import {AiOutlineClose} from "react-icons/ai"
import logo from '../images/ju_logo.png'


const Header = () => {
    const[isNavShowing, setIsNavShowing]= useState(window.innerWidth > 800 ? true:false);
    const closeNavHandler = () => {
        if(window.innerWidth<800){
            setIsNavShowing(false);
        } else{
            setIsNavShowing(true)
        }
    }
  return (
    <nav>
        <div className="container nav__container">
            <Link to = "/" className='nav__logo' onClick={closeNavHandler}>
                <img src={logo} alt="Logo"/>
            </Link>
            <span className='nav__politik'>Politika</span>
            {isNavShowing && <ul className="nav__menu">
                <li><Link to ="/profile/sdfsdf" onClick={closeNavHandler}>About</Link></li>
                <li><Link to ="/create" onClick={closeNavHandler}>Publish</Link></li>
                <li><Link to ="/authors" onClick={closeNavHandler}>Authors</Link></li>
                <li><Link to ="/logout" onClick={closeNavHandler}>Contact</Link></li>
            </ul>}
            <button className="nav__toggle-btn" onClick={() => setIsNavShowing(!isNavShowing)}>
                {isNavShowing ? <AiOutlineClose/>:<FaBars/>}
            </button>
        </div>
    </nav>

    
  )
}

export default Header