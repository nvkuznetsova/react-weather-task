import React from 'react';
import { NavLink } from 'react-router-dom';

export const Navbar = () => {
  const moscowId = 524901;
  const rostovId = 501175;
  return (
    <nav className="navbar">
      <NavLink exact to='/' className="nav-item" activeClassName='active-nav-item'>Saint-Petersburg</NavLink>
      <NavLink to={`/moscow/${moscowId}`} className="nav-item" activeClassName='active-nav-item'>Moscow</NavLink>
      <NavLink to={`/rostov-na-donu/${rostovId}`} className="nav-item" activeClassName='active-nav-item'>Rostov-na-Donu</NavLink>
    </nav>
  )
}
