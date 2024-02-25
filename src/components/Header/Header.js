import React from 'react';
import './Header.css';
import Logo from '../Logo/Logo';
import { NavLink } from 'react-router-dom';

function Header() {

  return (
    <header className="header">
      <Logo />
      <nav className="navigation">
        <ul>
          <li><NavLink to="/" className="link" activeClassName="active">Home</NavLink></li>
          <li><NavLink to="/catalog" className="link" activeClassName="active">Catalog</NavLink></li>
          <li><NavLink to="/cart" className="link" activeClassName="active">Cart</NavLink></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
