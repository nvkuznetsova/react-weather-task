import React from 'react';
import { NavLink } from 'react-router-dom';
import { MOSCOW_ID, ROSTOV_ID } from '../constants/constants';

export const Navbar = () => {
  return (
    <nav className="navbar">
      <NavLink exact to='/' className="nav-item" activeClassName='active-nav-item' data-marker="menu-item">Saint-Petersburg</NavLink>
      <NavLink to={`/moscow/${MOSCOW_ID}`} className="nav-item" activeClassName='active-nav-item' data-marker="menu-item">Moscow</NavLink>
      <NavLink to={`/rostov-na-donu/${ROSTOV_ID}`} className="nav-item" activeClassName='active-nav-item' data-marker="menu-item">Rostov-na-Donu</NavLink>
    </nav>
  )
}
