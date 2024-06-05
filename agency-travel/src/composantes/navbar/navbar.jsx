import React from 'react'
import { NavLink, Link } from "react-router-dom";
import { AiFillCar } from "react-icons/ai";
import { MdHome,MdOutlineLogin } from "react-icons/md";
import { PiAirplaneTiltFill } from "react-icons/pi";
import { IoBedSharp } from "react-icons/io5";
import { IoMdClose,IoMdMenu } from "react-icons/io";
import "./navbar.css"



export default function Navbar() {
  return (
    <header className='hearder'>
        <nav className='nav container'>
            <NavLink to="/" className="nav__logo">
              Logo
            </NavLink>
            <div  className={"nav__menu"}
         id="nav-menu">
            <ul className='nav__list'>
                <li className='nav__item'>
                    <NavLink to="/" className="nav__link"> <MdHome className='icons' /><span>Accueil</span></NavLink>
                </li>

                <li className='nav__item'>
                    <NavLink to="/vols" className="nav__link"> <PiAirplaneTiltFill  className='icons'/><span>Vols</span></NavLink>
                </li>

                <li>    
                    <NavLink to="/hotels" className="nav__link"> 
                    <IoBedSharp  className='icons'/><span>Hotels</span></NavLink>
                </li>

                <li className='nav__item'>
                    <Link to="/car" className="nav__link"> 
                    <AiFillCar  className='icons' /><span>Location de voiture </span>
                    </Link>
                </li>

                <li className='nav__item'>
                    <NavLink to="/connexion"   className="nav__link nav__cta"> <MdOutlineLogin className='icons' /><span>Connexion</span></NavLink>
                </li>
            </ul>
            <div className="nav__close" id="nav-close">
            <IoMdClose />
         </div>
      

       <div className="nav__toggle" id="nav-toggle">
       <IoMdMenu />
       </div>

            </div>
            

        </nav>
    </header>
  )
}
