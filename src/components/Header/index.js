import React from 'react';
import { HashLink } from 'react-router-hash-link';

import './header.css';
import MoonImage from '../../assets/images/header-graphics/moon.png';

import Nav from '../Header/Nav';
import Hero from '../Hero';


function Header() {
  return (
        <header className="header-section">
              {/* <Nav></Nav> */}
              <Hero></Hero>
        </header>
  );
}

export default Header;