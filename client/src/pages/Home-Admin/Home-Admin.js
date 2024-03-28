import React from 'react';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import './Home-Admin.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import ListingImage from '../../assets/listing-image.svg';
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons';

function HomeAdmin() {

  return (
    <div id='home-page'>
      <div id='home-page-heading'>
        <h1>Welcome back, John!</h1>
        <span id='page-subheading'>And a subheading describing your site, too</span><br></br>
      </div>

      <div id='home-page-quick-admin-info-section'>

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
                <h2>Dashboard</h2>
                <p>A subheading for this section, as long or as short as you like</p>
                <Link className='navigte-btn' to='/'>
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
                <h2>Users</h2>
                <p>A subheading for this section, as long or as short as you like</p>
                <Link className='navigte-btn' to='/'>
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
                <h2>Classified Ads</h2>
                <p>A subheading for this section, as long or as short as you like</p>
                <Link className='navigte-btn' to='/'>
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
                <h2>Dashboard</h2>
                <p>A subheading for this section, as long or as short as you like</p>
                <Link className='navigte-btn' to='/classified-ads?category=wanted'>
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
                <h2>Users</h2>
                <p>A subheading for this section, as long or as short as you like</p>
                <Link className='navigte-btn' to='/classified-ads?category=forSale'>
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
                <h2>Classified Ads</h2>
                <p>A subheading for this section, as long or as short as you like</p>
                <Link className='navigte-btn' to='/classified-ads?category=academicService'>
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

export default HomeAdmin;
