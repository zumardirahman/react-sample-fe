import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <div class='footer-links'>
          <div class='footer-link-items1'>
            <img src='images/image55.png'/>
           <p>JL. Prof. Dr. Satrio No.7 RT.3/RW.3, Karet Kuningan<br />
           Kecamatan Setiabudi, Kota Jakarta Selatan,<br />
           Daerah Khusus Ibukota Jakarta 12950</p>
           <section class='social-media'>
        <div class='social-media-wrap'>
          
          
          <div class='social-icons'>
            <Link
              class='social-icon-link facebook'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <i class='fab fa-facebook-f' />
            </Link>
            <Link
              class='social-icon-link instagram'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </Link>
            <Link
              class='social-icon-link youtube'
              to='/'
              target='_blank'
              aria-label='Youtube'
            >
              <i class='fab fa-youtube' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <i class='fab fa-twitter' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin' />
            </Link>
          </div>
        </div>
      </section>
          </div>
     
          <div class='footer-link-items'>
            <h2>Categoris</h2>
            <Link to='/'>Cupcake</Link>
            <Link to='/'>Pizza</Link>
            <Link to='/'>Kebab</Link>
            <Link to='/'>Salmon</Link>
            <Link to='/'>Dougnut</Link>
            
          </div>
        
          <div class='footer-link-items'>
            <h2>About Us</h2>
            <Link to='/'>About Us</Link>
            <Link to='/'>FAQ</Link>
            <Link to='/'>Report Problem</Link>
          </div>
          <div class='footer-link-items'>
        <h2>Newsletter</h2>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Your Email'
            />
            <Button buttonStyle='btn--outline'>Subscribe</Button>
          </form>
      
          </div>
        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
          </div>
          <small class='website-rights'>@ 2021 ELEMES ID ALL RIGHTS RESERVED</small>
          <div class='social-icons'>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;