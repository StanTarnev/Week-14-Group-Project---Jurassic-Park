import React from 'react';

const NavBar = (props) => {
  return (
    <header>

    <img src="/favicon.ico" alt="Logo"/>

      <h1>Jurassic Park</h1>
        <ul>
          <li className="navLink">
            <a href="/">View Park</a>
          </li>
          <li className="navLink">
            <a href="/dashboard">View Dashboard</a>
          </li>
          <li>
            <a>Help</a>
          </li>
        </ul>

    </header>
  )
}

export default NavBar;
