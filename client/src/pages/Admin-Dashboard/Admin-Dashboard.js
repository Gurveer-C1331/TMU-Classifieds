import React from 'react';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import './Admin-Dashboard.css';
import '../../theme.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import ListingImage from '../../assets/listing-image.svg';
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons';

function AdminDashboard()
{

  return (
    <div class='main-page-container' id='home-page' className='main-page-container'>
      <div id='home-page-heading'>
        <h1>Welcome John!</h1>
      </div>

      <div id='home-page-quick-admin-info-section'>

      </div>

      <div id='home-page-info-container'>
        <div className='home-page-info-section' id='lg-info-section'>
          <Grid container spacing={2} justifyContent="center" textAlign="center">
            <Grid item md={0.75}>
              <p>Wanted</p>
            </Grid>
            <Grid item md={0.75}>
              <p>For Sale</p>
            </Grid>
            <Grid item md={0.75}>
              <p>Academic Services</p>
            </Grid>

          </Grid>

          <Grid container spacing={2} justifyContent="center" textAlign="center">
            <Grid item md={0.75}>
              <p class="number">23</p>
              <p class="sm-text">listings</p>
            </Grid>
            <Grid item md={0.75}>
              <p class="number">25</p>
              <p class="sm-text">listings</p>
            </Grid><Grid item md={0.75}>
              <p class="number">16</p>
              <p class="sm-text">listings</p>
            </Grid>
          </Grid>

        </div>

      </div>
    </div>
  );
}

export default AdminDashboard;
