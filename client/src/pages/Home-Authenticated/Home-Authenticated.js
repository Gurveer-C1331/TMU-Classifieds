import React from 'react';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import './Home-Authenticated.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import ListingImage from '../../assets/listing-image.svg';
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons';

function HomeAuthenticated() {

  return (
    <div id='home-page'>
      <div id='home-page-heading'>
        <h1>Welcome back, John!</h1>
        <span id='page-subheading'>And a subheading describing your site, too</span><br></br>
      </div>

      <div id='home-page-info-container'>
        <div className='home-page-info-section'>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={12} style={{
              marginBottom: '3em'
            }}>
              <Grid item md={5} style={{
                margin: 'auto'
              }}>
                <h2>Items wanted</h2>
                <p>A subheading for this section, as long or as short as you like</p>
                <Link className='navigte-btn' to='/classified-ads?category=wanted'>
                  <FontAwesomeIcon icon={faArrowRightLong} style={{color: "#FFF"}} />
                </Link>
              </Grid>
              <Grid item md={6}>
                <img src={ListingImage}></img>
              </Grid>
            </Grid>
            <Grid container spacing={12} style={{
              marginBottom: '3em'
            }}>
              <Grid item md={6}>
                <img src={ListingImage}></img>
              </Grid>
              <Grid item md={5} style={{
                margin: 'auto'
              }}>
                <h2>Items for sale</h2>
                <p>A subheading for this section, as long or as short as you like</p>
                <Link className='navigte-btn' to='/classified-ads?category=forSale'>
                  <FontAwesomeIcon icon={faArrowRightLong} style={{color: "#FFF"}} />
                </Link>
              </Grid>
            </Grid>
            <Grid container spacing={12} style={{
              marginBottom: '5em'
            }}>
              <Grid item md={5} style={{
                margin: 'auto'
              }}>
                <h2>Academic services</h2>
                <p>A subheading for this section, as long or as short as you like</p>
                <Link className='navigte-btn' to='/classified-ads?category=academicService'>
                  <FontAwesomeIcon icon={faArrowRightLong} style={{color: "#FFF"}} />
                </Link>
              </Grid>
              <Grid item md={6}>
                <img src={ListingImage}></img>
              </Grid>
            </Grid>
          </Box>
        </div>
      </div>
    </div>
  );
}

export default HomeAuthenticated;
