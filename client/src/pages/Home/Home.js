import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import './Home.css';
import ListingImage from '../../assets/listing-image.svg';

function Home() {

  return (
    <div>
      <div id='home-page'>
        <div id='home-page-heading'>
          <h1>Welcome to TMU Classifieds</h1>
          <span id='page-subheading'>And a subheading describing your site, too</span><br></br>
          <button id='join-today-btn'>Join today!</button>
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
                </Grid>
                <Grid item md={6}>
                  <img src={ListingImage}></img>
                </Grid>
              </Grid>
            </Box>
          </div>
        </div>
      </div>

      <div id='join-us-today-section'>
        <h2>Join us today!</h2>
        <span id='page-subheading'>And a subheading describing your site, too</span><br></br>
        <button id='join-today-btn'>Join today!</button> 
      </div>
    </div>
  );
}

export default Home;
