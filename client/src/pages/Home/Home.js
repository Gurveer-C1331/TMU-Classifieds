import React from 'react';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import './Home.css';
import ListingImage from '../../assets/listing-image.svg';

function Home() {

  return (
    <div>
      <div id='home-page' className='main-page-container'>
        <div id='home-page-heading'>
          <h1>Welcome to TMU Classifieds</h1>
          <span className='subtitle-text'>A Place For TMU Students</span>
          <br></br>
          <br></br>
          <Link to="/register" className='primary-button' id='join-today-btn'>Join today!</Link>
        </div>

        <div id='home-page-info-container'>
          <div className='home-page-info-section' id='lg-info-section'>
            <Box sx={{ flexGrow: 1 }}>
              <Grid container spacing={2} style={{
                marginBottom: '3em',
              }}>
                <Grid item md={5} style={{
                  margin: 'auto'
                }}>
                  <h2>Items wanted</h2>
                  <p className='subtitle-text'>Things TMU Students Want</p>
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
                  <p className='subtitle-text'>Things TMU Students Are Selling</p>
                </Grid>
              </Grid>
              <Grid container spacing={2} style={{
                marginBottom: '5em'
              }}>
                <Grid item md={5} style={{
                  margin: 'auto'
                }}>
                  <h2>Academic services</h2>
                  <p className='subtitle-text'>Services TMU Students Need</p>
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
                  <p className='subtitle-text'>Things TMU Students Want</p>
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
                  <p className='subtitle-text'>Things TMU Students Are Selling</p>
                </Grid>
              </Grid>
              <Grid container spacing={2} style={{
                marginBottom: '5em',
                textAlign: 'center',
                justifyContent: 'center'
              }}>
                <Grid item md={6}>
                  <img src={ListingImage} alt='academic-services' style={{
                    
                  }}></img>
                </Grid>
                <Grid item md={5} style={{
                  margin: 'auto'
                }}>
                  <h2>Academic services</h2>
                  <p className='subtitle-text'>Services TMU Students Need</p>
                </Grid>
              </Grid>
            </Box>
          </div>
        </div>
      </div>

      <div id='join-us-today-section'>
        <h2>Join us today!</h2>
        <span className='subtitle-text'>TMU Students Won't Regret It!</span><br></br>
        <button id='join-today-btn' className='primary-button'>Join today!</button> 
      </div>
    </div>
  );
}

export default Home;
