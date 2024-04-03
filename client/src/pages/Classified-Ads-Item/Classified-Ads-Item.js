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
  const [isAdmin, setIsAdmin] = useState(false);

  const listingItemId = useParams()['listing-id'];
  // console.log(listingItemId);
  useEffect(() => {
    //retrieve listing item from server
    const fetchLisitingItem = async () => {
      try {
        const response = await fetch(`http://localhost:3001/api/listings/${listingItemId}`, {
          method: 'GET'
        })
        // const response = await fetch(`http://localhost:3001/api/listings/test`, {
        //   method: 'GET'
        // })
          .then((response) => response.json())
          .then((data) => setlistingItem(data));
      } catch (error) {
        console.error("Error fetching listing item id: data:", error);
      }
    };
    fetchLisitingItem();
  }, [listingItemId]);

  useEffect(() => {
    //retrieve listing item from server
    const fetchisAdmin = async () => {
      try {
        const response = await fetch(`http://localhost:3001/api/user/isAdmin`, {
          method: 'GET'
        })
          .then((response) => {
            if (response.ok) setIsAdmin(true);
          });
      } catch (error) {
        console.error("Error fetching listing item id: data:", error);
      }
    };
    fetchisAdmin();
  }, []);

  let listingItemDom = null;
  let deleteBtn = null;
  if (isAdmin) {
    deleteBtn = <button id='delete-btn' className='primary-button'>Delete listing</button>;
  }

  if (listingItem) {
    listingItemDom = 
    <Grid container spacing={2}>
      <Grid item xs={12} md={6}>
        <div id='item-image-container'>
          <img src={ListingImage} alt={listingItem.ad.adName}></img>
        </div>
      </Grid>
      <Grid item xs={12} md={6}>
        <div id='item-info-container'>
          <h1 id='item-title'>{listingItem.ad.adName}</h1>
          <span id='item-listing-type'>{listingItem.category.category_type}</span><br></br>
          <span id='item-price'>{listingItem.category == 'Item wanted' ? '' : '$' + listingItem.ad.price}</span><br></br>
          <FontAwesomeIcon icon={faLocationDot} style={{color: "#004c9b"}} />
          <span id='item-location'>{listingItem.ad.location}</span>

          <div id='item-lister-contact'>
            <span id='item-lister'>
              {'Lister: ' + listingItem.user.username}
            </span>
          </div>

          <p id='item-description'>{listingItem.ad.description}</p>
            { deleteBtn }
        </div>
      </Grid>
    </Grid>;
  }

  return (
    <div id='classified-ads-item' className='main-page-container'>
      <Box sx={{ flexGrow: 1 }}>
        {listingItemDom}
      </Box>
    </div>
  );
}

export default ClassifiedAdsItem;
