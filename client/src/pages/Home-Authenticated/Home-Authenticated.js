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
    <div id='home-page' className='main-page-container'>
      <div id='home-page-heading'>
        <h1>Welcome back, {localStorage.getItem('firstName')}!</h1>
        <span className='subtitle-text'>And a subheading describing your site, too</span><br></br>
      </div>

      <div id='home-page-info-container'>
        <div className='home-page-info-section' id='lg-info-section'>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2} style={{
              marginBottom: '3em'
            }}>
              <Grid item md={5} style={{
                margin: 'auto'
              }}>
                <h2>Items wanted</h2>
                <p className='subtitle-text'>A subheading for this section, as long or as short as you like</p>
                <Link className='primary-button' to='/classified-ads?category=wanted'>
                  <FontAwesomeIcon icon={faArrowRightLong} size='lg' style={{color: "#FFF"}} />
                </Link>
              </Grid>
              <Grid item md={6}>
                <img src={ListingImage} alt='items-wanted'></img>
              </Grid>
            </Grid>
            <Grid container spacing={2} style={{
              marginBottom: '3em'
            }}>
              <Grid item md={6}>
                <img src={ListingImage} alt='items-for-sale'></img>
              </Grid>
              <Grid item md={5} style={{
                margin: 'auto'
              }}>
                <h2>Items for sale</h2>
                <p className='subtitle-text'>A subheading for this section, as long or as short as you like</p>
                <Link className='primary-button' to='/classified-ads?category=forSale'>
                  <FontAwesomeIcon icon={faArrowRightLong} size='lg' style={{color: "#FFF"}} />
                </Link>
              </Grid>
            </Grid>
            <Grid container spacing={2} style={{
              marginBottom: '5em'
            }}>
              <Grid item md={5} style={{
                margin: 'auto'
              }}>
                <h2>Academic services</h2>
                <p className='subtitle-text'>A subheading for this section, as long or as short as you like</p>
                <Link className='primary-button' to='/classified-ads?category=academicService'>
                  <FontAwesomeIcon icon={faArrowRightLong} size='lg' style={{color: "#FFF"}} />
                </Link>
              </Grid>
              <Grid item md={6}>
                <img src={ListingImage} alt='academic-services'></img>
              </Grid>
            </Grid>
          </Box>
        </div>

        <div className='home-page-info-section' id='sm-info-section'>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2} style={{
              marginBottom: '3em',
              textAlign: 'center',
              justifyContent: 'center'
            }}>
              <Grid item md={6}>
                <img src={ListingImage} alt='items-wanted'></img>
              </Grid>
              <Grid item md={5} style={{
                margin: 'auto'
              }}>
                <h2>Items wanted</h2>
                <p className='subtitle-text'>A subheading for this section, as long or as short as you like</p>
                <Link className='primary-button' to='/classified-ads?category=wanted'>
                  <FontAwesomeIcon icon={faArrowRightLong} size='lg' style={{color: "#FFF"}} />
                </Link>
              </Grid>
            </Grid>
            <Grid container spacing={2} style={{
              marginBottom: '3em',
              textAlign: 'center',
              justifyContent: 'center'
            }}>
              <Grid item md={6}>
                <img src={ListingImage} alt='items-for-sale'></img>
              </Grid>
              <Grid item md={5} style={{
                margin: 'auto'
              }}>
                <h2>Items for sale</h2>
                <p className='subtitle-text'>A subheading for this section, as long or as short as you like</p>
                <Link className='primary-button' to='/classified-ads?category=forSale'>
                  <FontAwesomeIcon icon={faArrowRightLong} size='lg' style={{color: "#FFF"}} />
                </Link>
              </Grid>
            </Grid>
            <Grid container spacing={2} style={{
              marginBottom: '5em',
              textAlign: 'center',
              justifyContent: 'center'
            }}>
              <Grid item md={6}>
                <img src={ListingImage} alt='academic-services'></img>
              </Grid>
              <Grid item md={5} style={{
                margin: 'auto'
              }}>
                <h2>Academic services</h2>
                <p className='subtitle-text'>A subheading for this section, as long or as short as you like</p>
                <Link className='primary-button' to='/classified-ads?category=academicService'>
                  <FontAwesomeIcon icon={faArrowRightLong} size='lg' style={{color: "#FFF"}} />
                </Link>
              </Grid>
            </Grid>
          </Box>
        </div>
      </div>
    </div>
  );
}

export default HomeAuthenticated;
