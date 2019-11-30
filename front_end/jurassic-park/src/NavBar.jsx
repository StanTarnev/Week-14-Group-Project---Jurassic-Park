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
          <li className="navLink">
            <a href="/dinosaurs/new">Create Dinosaur</a>
          </li>
          <li className="navLink">
            <a href="/paddocks/new">Create Paddock</a>
          </li>
        </ul>

    </header>
  )
}

export default NavBar;
