import React from 'react'

const Sidebar = () => {
  return (
    <div className='position'>
   
      <nav id="navbar-example3" className="h-100 flex-column align-items-stretch pe-4 border-end">
        <nav className="nav nav-pills flex-column">
          <a className="nav-link color bold" href="#item-1">Show By Room</a>
          <nav className="nav nav-pills flex-column ">
            <a className="nav-link ms-3 my-1 color" href="#item-1-1">Living Room</a>
            <a className="nav-link ms-3 my-1 color " href="#item-1-2">Dinning Room</a>
            <a className="nav-link ms-3 my-1 color" href="#item-1-2">Office Room</a>
            <a className="nav-link ms-3 my-1 color" href="#item-1-2">Bed Room</a>
            <a className="nav-link ms-3 my-1 color" href="#item-1-2">Game Room</a>
          </nav>
          </nav>
          <nav className="nav nav-pills flex-column">
          <a className="nav-link color bold" href="#item-1">Featured Category</a>
          <nav className="nav nav-pills flex-column ">
            <a className="nav-link ms-3 my-1 color" href="#item-1-1">Coffee Table </a>
            <a className="nav-link ms-3 my-1 color " href="#item-1-2">Dinning Chairs</a>
            <a className="nav-link ms-3 my-1 color" href="#item-1-2">Tv & Media Consoles</a>
            <a className="nav-link ms-3 my-1 color" href="#item-1-2">Beds </a>
            <a className="nav-link ms-3 my-1 color" href="#item-1-2">Desk Chairs</a>
          </nav>
          </nav>
          </nav>
          
          
          </div>
  )
}

export default Sidebar