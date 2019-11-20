import React from 'react';
import { NavLink } from 'react-router-dom';
import { CITIES_NAMES } from '../constants/constants';

export const Navbar = () => {
  return (
    <nav className="navbar">
      <NavLink to={`/${CITIES_NAMES.spb}`} className="nav-item" activeClassName='active-nav-item' data-marker="menu-item">Saint-Petersburg</NavLink>
      <NavLink to={`/${CITIES_NAMES.moscow}`} className="nav-item" activeClassName='active-nav-item' data-marker="menu-item">Moscow</NavLink>
      <NavLink to={`/${CITIES_NAMES.rostov}`} className="nav-item" activeClassName='active-nav-item' data-marker="menu-item">Rostov-na-Donu</NavLink>
    </nav>
  )
}
