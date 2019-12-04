import React from 'react';

const NavBar = (props) => {
  return (
    <header>

    <img src="/images/jurassic_park_logo.png" alt="Logo"/>


        <ul>
          <li className="navLink">
            <a href="/">View Park</a>
          </li>
          <li className="navLink">
            <a href="/dashboard">View Dashboard</a>
          </li>
        
        </ul>

    </header>
  )
}

export default NavBar;
