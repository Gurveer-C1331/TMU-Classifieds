import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons';
import tmuLogo from '../../assets/tmu-logo.svg';
import './Footer.css';

function Footer() {

  return (
    <footer id='tmu-classified-footer'>
      <div id='site-info'>
        <img src={tmuLogo} id='logo-footer' alt='TMU Logo'></img><br/>
        <span id='address'>350 Victoria St, Toronto, ON <br/>M5B 2K3</span><br/>
        <span id='copyright-text'>@ 2024 TMU Classifieds. All rights reserved</span>
      </div>

      <div id='social-media-container'>
        <span>Social media</span>
        <div>
          <FontAwesomeIcon className='social-media-icons' icon={faFacebook} style={{color: "#004c9b"}} />
          <FontAwesomeIcon className='social-media-icons' icon={faLinkedin} style={{color: "#004c9b"}} />
          <FontAwesomeIcon className='social-media-icons' icon={faInstagram} style={{color: "#004c9b"}} />
          <FontAwesomeIcon className='social-media-icons' icon={faYoutube} style={{color: "#004c9b"}} />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
