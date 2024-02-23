import React, { useState } from 'react';
import './Header.css';
import Logo from '../Logo/Logo';

function Header() {
  const [active, setActive] = useState('Home'); 

  return (
    <header class="header">
      <Logo />
      <nav className="navigation">
        <ul>
          <li className={active === 'Home' ? 'active' : ''} onClick={() => setActive('Home')}>Home</li>
          <li className={active === 'Catalog' ? 'active' : ''} onClick={() => setActive('Catalog')}>Catalog</li>
          <li className={active === 'Cart' ? 'active' : ''} onClick={() => setActive('Cart')}>Cart</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
