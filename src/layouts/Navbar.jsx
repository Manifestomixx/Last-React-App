import React from 'react'
import '../styles/Navbar.css'
import { Link } from 'react-router-dom';

const Navbar = ({cart}) => {
  console.log(cart.length);
  return (
    <>
    <nav className='nav-container'>
        <h2>Manifesto</h2>
        <ul className='list-unstyled'>
            <li>
              <Link className='text-white' to="/"> Hero </Link>
            </li>
            <li>
              <Link className='text-white' to="/fetch"> Fetch </Link>
            </li>
            <li>
              <Link className='text-white' to="/form"> Form </Link>
            </li>
            <li>
              <Link className='text-white' to="/products"> Products </Link>
            </li>
            
        </ul>
        <h2>cart({cart.length})</h2>
    </nav>
    
    </>
  )
}

export default Navbar