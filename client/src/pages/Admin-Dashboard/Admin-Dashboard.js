import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { BarChart } from '@mui/x-charts/BarChart';
import { PieChart } from '@mui/x-charts/PieChart';
import './Admin-Dashboard.css';
import '../../theme.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import ListingImage from '../../assets/listing-image.svg';
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons';

function AdminDashboard()
{
  const [listingItems, setlistingItems] = useState([]);

  useEffect(() =>
  {
    //retrieve all listing items from server
    const fetchLisitingItems = async () =>
    {
      try
      {
        const response = await fetch(`http://localhost:3001/api/dashboard`, {
          method: 'GET'
        })
          .then((response) => response.json())
          .then((data) => setlistingItems(data));
      } catch (error)
      {
        console.error("Error fetching classified listings data:", error);
      }
    };
    fetchLisitingItems();
  }, []);


  // data processing
  var wanted = 0;
  var sale = 0;
  var academic = 0;
  var dataset = [];
  var date

  for (let i = 0; i < listingItems.length; i++) 
  {
    if (listingItems[i].category == "items_wanted") wanted++;
    else if (listingItems[i].category == "items_for_sale") sale++;
    else academic++;

    date = listingItems[i].datePosted[0].substring(0, 10)
    if (dataset.length == 0) 
    {
      dataset.push({ x: date, y: 1 });
      continue;
    }

    for (let j = 0; j < dataset.length; j++)
    {
      if (dataset[j].x == date)
      {
        dataset[j].y++;
      }
      else
      {
        dataset.push({ x: date, y: 1 });
      }
    }
  }
  console.log(dataset);



  var min = '9'
  var max = '0'
  for (let i = 0; i < dataset.length; i++)
  {
    if (dataset[i].x > max) max = dataset[i].x;
    if (dataset[i].x < min) min = dataset[i].x;
  }


  var max_date = new Date(max)
  max_date.setDate(max_date.getDate() + 1);
  for (var daylist = [], dt = new Date(min); dt <= max_date; dt.setDate(dt.getDate() + 1))
  {
    daylist.push(new Date(dt));
  }
  for (let i = 0; i < daylist.length; i++)daylist[i] = daylist[i].toISOString().substring(0, 10);
  var graph_dataset = [];

  for (let i = 0; i < daylist.length; i++)
  {
    graph_dataset.push({ x: daylist[i], y: 0 });
    for (let j = 0; j < dataset.length; j++)
    {
      if (dataset[j].x == graph_dataset[i].x) graph_dataset[i].y = dataset[j].y;
    }
  }

  let DOM = null;
  if (dataset.length > 0)
  {
    DOM =
      <>

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
                <p class="number">{wanted}</p>
                <p class="sm-text">listings</p>
              </Grid>
              <Grid item md={0.75}>
                <p class="number">{sale}</p>
                <p class="sm-text">listings</p>
              </Grid>
              <Grid item md={0.75}>
                <p class="number">{academic}</p>
                <p class="sm-text">listings</p>
              </Grid>
            </Grid>
          </div>

          <br></br>
          <br></br>
          <br></br>
          <div id="graphs">
            <div id="type" class="center">

              <PieChart
                series={[
                  {
                    data: [
                      { id: 0, value: wanted, label: 'Wanted', color: '#004c9b' },
                      { id: 1, value: sale, label: 'For Sale', color: '#33acff' },
                      { id: 2, value: academic, label: 'Academic Services', color: '#bbc4ca' },
                    ],
                  },
                ]}
                slotProps={{
                  legend: {
                    direction: 'row',
                    position: { vertical: 'top', horizontal: 'middle' },
                    padding: 0,
                  }
                }}
                width={400}
                height={500}
              />
            </div>

            <div id="number" class="center">
              <BarChart
                dataset={graph_dataset}
                xAxis={[{ scaleType: 'band', dataKey: 'x' }]}
                series={[{ dataKey: 'y', color: '#004c9b' }]}
                width={1500}
                height={500}
              />
            </div>
          </div>
        </div>
      </>
  }
  return (
    <div class='main-page-container' id='home-page' className='main-page-container'>
      {DOM}
    </div>
  );
}

export default AdminDashboard;
