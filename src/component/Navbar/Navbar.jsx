import React from 'react'; 
import "./Navbar.css" ; 

const navbar = () => {
  return (
    <>
    <nav className='nav-wrapper'>
     <div className='nav-content'>
        <img className='logo' src='./assets/images/logo(1).svg' alt='logo(1)'/>

      <ul> 
        <li>
            <a className='menu-item'>Home</a>
        </li>
        <li>
            <a className='menu-item'>Skills</a>
        </li>
        <li>
            <a className='menu-item'>Work Experience</a>
        </li>
        <li>
            <a className='menu-item'>Contact Me</a>
        </li>
        <button className='contact-btn' onClick={() =>{}}>Hire Me</button>
        </ul>  
        <button class='menu-btn6' onClick={() =>{}} >
            <span 
            class={"material-symbols-outlined"}
            style={{ fontSize: "1.8rem" }}
            >
             menu
            </span>
        </button>
     </div>
    </nav>
    </>
  )
}

export default navbar