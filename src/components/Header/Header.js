import React from 'react';
import './Header.css';
import Logo from '../Logo/Logo';
import { NavLink, useLocation } from 'react-router-dom';
import SearchInput from '../../components/SearchInput/SearchInput';

function Header() {
  const location = useLocation();

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
      {location.pathname === '/catalog' && <SearchInput />}    
    </header>
  );
}

export default Header;
