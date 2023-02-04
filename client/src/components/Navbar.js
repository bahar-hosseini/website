//External Modules
import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

function Navbar() {
  return (
    <div role='navigation'>
      <nav id='mainNavbar' className='navbar navbar-expand fixed-top '>
        <Link to='#' className='navbar-brand'>
          {' '}
          BH{' '}
        </Link>
        {/* <button
          className='navbar-toggler'
          data-toggle='collapse'
          data-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-label='Toggle navigation'
          aria-expanded='false'
        >
          <i className='fas fa-bars '> </i>
        </button> */}

        <ul className='navbar-nav'>
          <li className='nav-item'>
            <Link smooth to='#about' className='nav-link'>
              {' '}
              ABOUT{' '}
            </Link>
          </li>
          <li className='nav-item'>
            <Link smooth to='#resume' className='nav-link'>
              {' '}
              RESUME{' '}
            </Link>
          </li>
          {/* <li className = "nav-item" >
        <Link  smooth to = "#blog"
        className = "nav-link" > BLOG </Link> </li> */}
          <li className='nav-item'>
            <Link smooth to='#contacts' className='nav-link'>
              {' '}
              CONTACTS{' '}
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;

// ////////////////////////////
