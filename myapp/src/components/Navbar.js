import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom'


const Navbar = ({cartQuantity,handleShow}) => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = event => {
    setIsActive(current => !current); 
  };
  const bars = <i className="fa-solid fa-bars"></i>;
  const x = <i className="fa-solid fa-x"></i>;


  return (
    <>
  
    <section className='header'>
        <div className="logo">Modern<i className="fa-regular fa-snowflake"></i></div>
     <form>
      <input className="form-control me-2 search" type="search" placeholder="Search" aria-label="Search"/>
     </form>
     <div className={`navbar ${isActive ? "active": ""}`}>
      
          <Link to = {"/"} >
            <a onClick={handleClick}>Home</a>
          </Link>
            <Link to={'/products'}>
            <a onClick={handleClick} href="#products">Products</a>
            </Link>
            <Link to = {"/about"}>
            <a onClick={handleClick} href="#about">About</a>
            </Link>
            <Link to = {"/contactUs"}>
            <a onClick={handleClick} href="#contact">Contact</a>
            </Link>
            </div>
        <div className="icons">
            <a href="#" className="fas fa-heart"></a>
            
            <a href="#" className="fas fa-shopping-cart" onClick={handleShow}> {cartQuantity}</a>
            <Link to = {'/form'}>
            <a href="#"><i className="fa-solid fa-user"></i></a>
            </Link>
            </div>
        
      

        <button className='toggle' onClick={handleClick}>{isActive? x : bars}</button>
      

    </section>
    </>
  )
}

export default Navbar