import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './Classified-Ads-Item.css';
import ListingImage from '../../assets/listing-image.svg';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';


function ClassifiedAdsItem() {
  const [listingItem, setlistingItem] = useState(null);

  const listingItemId = useParams()['listing-id'];
  // console.log(listingItemId);
  useEffect(() => {
    //retrieve listing item from server
    const fetchLisitingItem = async () => {
      try {
        const response = await fetch(`http://localhost:3001/api/listings/${listingItemId}`, {
          method: 'GET'
        })
          .then((response) => response.json())
          .then((data) => setlistingItem(data));
      } catch (error) {
        console.error("Error fetching listing item id: data:", error);
      }
    };
    fetchLisitingItem();
  }, [listingItemId]);

  let listingItemDom = null;
  if (listingItem) {
    listingItemDom = 
    <Grid container spacing={2}>
      <Grid item xs={12} md={6}>
        <div id='item-image-container'>
          <img src={ListingImage} alt={listingItem.listing_title}></img>
        </div>
      </Grid>
      <Grid item xs={12} md={6}>
        <div id='item-info-container'>
          <h1 id='item-title'>{listingItem.listing_title}</h1>
          <span id='item-listing-type'>{listingItem.listing_type}</span><br></br>
          <span id='item-price'>{listingItem.listing_type === 'Item wanted' ? '' : '$' + listingItem.price}</span><br></br>
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
    </Grid>;
  }

  return (
    <div id='classified-ads-item'>
      <Box sx={{ flexGrow: 1 }}>
        {listingItemDom}
      </Box>
    </div>
  );
}

export default ClassifiedAdsItem;
