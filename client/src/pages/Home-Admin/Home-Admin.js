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
    <div id='home-page' className='main-page-container'>
      <div id='home-page-heading'>
        <h1>Welcome back, {localStorage.getItem('firstName')}!</h1>
        <span className='subtitle-text'>A Place For TMU Students</span><br></br>
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
                <p className='subtitle-text'>Visualized Posting Data</p>
                <Link className='primary-button' to='/dashboard'>
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
                <p className='subtitle-text'>Manage Users</p>
                <Link className='primary-button' to='/users'>
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
                <p className='subtitle-text'>Checkout What Ads TMU Students Are Posting</p>
                <Link className='primary-button' to='/classified-ads'>
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
                <p className='subtitle-text'>Visualized Posting Data</p>
                <Link className='primary-button' to='/dashboard'>
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
                <p className='subtitle-text'>Manage Users</p>
                <Link className='primary-button' to='/users'>
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
                <p className='subtitle-text'>Checkout What Ads TMU Students Are Posting</p>
                <Link className='primary-button' to='/classified-ads'>
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
