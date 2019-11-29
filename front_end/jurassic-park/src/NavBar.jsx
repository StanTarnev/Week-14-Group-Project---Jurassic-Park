import React from 'react';

const NavBar = (props) => {
  return (
    <header>

    <img src="/favicon.ico" alt="Logo"/>

    <ul>
      <h1>Jurrasic Park</h1>
      <li className="navLink">
        <a>Home</a>
      </li>
      <li className="navLink">
        <a>Dashboard</a>
      </li>
    </ul>

    </header>
  )
}

export default NavBar;
