import React from 'react';

import tmuLogo from '../../assets/tmu-logo.svg';
import './Nav.css';

function Nav() {

  return (
    <header>
      <img src={tmuLogo} id='logo-nav'></img>

      <div id='link-container'>
        <span id='sign-up-btn'>Sign up</span>
        <span id='login-btn'>Log in</span>
      </div>
    </header>
  );
}

export default Nav;
