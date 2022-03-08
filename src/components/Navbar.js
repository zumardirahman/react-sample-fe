import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import {Button} from './Button';


function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
      if(window.innerWidth <=960) {
        setButton(false);
      } else{
        setButton(true);
      }
    };

    useEffect(() => {
      showButton();
    }, []);
  
    
    window.addEventListener('resize', showButton);
    return(
      <>
        <nav className='navbar'>
            <div className='navbar-container'>
                <Link to='/' className='navbar-logo' 
                onClick={closeMobileMenu}>
                  
                    <img src='images/image55.png'/>
                </Link>
                <div className='menu-icon' onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                <h2>Home</h2>
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/services'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                 <h2>About</h2>
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/promotions'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                   <h2>Promotions</h2>
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/blogs'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                  <h2>Blogs</h2>
              </Link>
            </li>
            <li>
              <Link
                to='/sign-up'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                Sign Up
              </Link>
            </li>
          </ul>
                {button && <Button buttonStyle='btn--outline'>Daftar Sekarang</Button>}
              </div>
        </nav>

      </>
    )
        
}

export default Navbar