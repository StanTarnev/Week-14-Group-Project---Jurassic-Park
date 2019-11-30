import React from 'react';

const NavBar = (props) => {
  return (
    <header>

    <img src="/favicon.ico" alt="Logo"/>

      <h1>Jurrasic Park</h1>
        <ul>
          <li className="navLink">
            <a href="/">Home</a>
          </li>
        </ul>

    </header>
  )
}

export default NavBar;
