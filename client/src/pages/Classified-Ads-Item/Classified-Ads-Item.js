import React from 'react';
import { useParams } from 'react-router-dom';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './Classified-Ads-Item.css';
import ListingImage from '../../assets/listing-image.svg';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';


function ClassifiedAdsItem() {
  const listingItem = {
    id: 1,
    listing_title: 'Two pears',
    image: '',
    listing_type: 'Item wanted',
    location: 'Toronto, ON',
    price: 5.99,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    listing_user: {
      first_name: 'John',
      last_name: 'Doe'
    }
  };

  const listingItemId = useParams()['listing-id'];
  console.log(listingItemId);

  return (
    <div id='classified-ads-item'>
      <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <div id='item-image-container'>
                  <img src={ListingImage}></img>
                </div>
              </Grid>
              <Grid item xs={12} md={6}>
                <div id='item-info-container'>
                  <h1 id='item-title'>{listingItem.listing_title}</h1>
                  <span id='item-listing-type'>{listingItem.listing_type}</span><br></br>
                  <span id='item-price'>${listingItem.price}</span><br></br>
                  <FontAwesomeIcon icon={faLocationDot} style={{color: "#004c9b"}} />
                  <span id='item-location'>{listingItem.location}</span>

                  <div id='item-lister-contact'>
                    <span id='item-lister'>
                      {'Contact ' + listingItem.listing_user.first_name + ' ' + listingItem.listing_user.last_name}
                    </span><br></br>
                    <button id='send-message-btn'>Send message</button>
                  </div>

                  <p id='item-description'>{listingItem.description}</p>
                </div>
              </Grid>
          </Grid>
        </Box>
    </div>
  );
}

export default ClassifiedAdsItem;
