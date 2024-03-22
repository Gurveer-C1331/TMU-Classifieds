import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Classified-Ads.css';
import { faSliders } from '@fortawesome/free-solid-svg-icons';

function ClassifiedAds() {

  return (
    <div>
      <div id='classified-ads-heading'>
        <h1>Classified Ads</h1>
        <span id='page-subheading'>And a subheading describing your site, too</span>
      </div>

      <div id='classified-ads-toolbar'>
        <div id='classified-ads-search'>
          <input id='classified-ads-searchbar' placeholder='What are you looking for today?'></input>
          <span id='classified-ads-search-btn'>Search</span>
        </div>
        <span id='classified-ads-filter-btn'>
          <FontAwesomeIcon icon={faSliders} style={{color: "#FFF"}} />
        </span>
        <div id='classified-ads-filter-options' style={{display: 'none'}}></div>
      </div>

      <div id='classified-ads-listing-info'></div>

      <div id='classified-ads-listing-container'></div>
    </div>
  );
}

export default ClassifiedAds;
