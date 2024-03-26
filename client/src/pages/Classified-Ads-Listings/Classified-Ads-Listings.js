import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faSliders, faXmark } from '@fortawesome/free-solid-svg-icons';
import './Classified-Ads-Listings.css';
import ListingImage from '../../assets/listing-image.svg';


function ClassifiedAdsListings() {
  const listingItems = [
    {id: 1, listing_title: 'Product title', image: '', listing_type: 'Item wanted', location: 'Toronto, ON', price: 50, description: 'text'},
    {id: 2, listing_title: 'Product title', image: '', listing_type: 'Academic service', location: 'Toronto, ON', price: 50, description: 'text'},
    {id: 3, listing_title: 'Product title', image: '', listing_type: 'Item for sale', location: 'Toronto, ON', price: 50, description: 'text'},
    {id: 4, listing_title: 'Product title', image: '', listing_type: 'Item for sale', location: 'Toronto, ON', price: 50, description: 'text'},
    {id: 5, listing_title: 'Product title', image: '', listing_type: 'Item wanted', location: 'Toronto, ON', price: 50, description: 'text'},
    {id: 6, listing_title: 'Product title', image: '', listing_type: 'Item for sale', location: 'Toronto, ON', price: 50, description: 'text'},
    {id: 7, listing_title: 'Product title', image: '', listing_type: 'Item wanted', location: 'Toronto, ON', price: 50, description: 'text'},
    {id: 8, listing_title: 'Product title', image: '', listing_type: 'Academic service', location: 'Toronto, ON', price: 50, description: 'text'},
  ];

  const [toggleFilters, setToggleFilters] = React.useState(false);
  const [categories, setCategories] = React.useState({
    wanted: false,
    forSale: false,
    academicService: false
  });
  const [appliedCategories, setAppliedCategories] = React.useState({
    wanted: false,
    forSale: false,
    academicService: false
  });
  const [appliedPriceRange, setAppliedPriceRange] = React.useState({
    min: 0,
    max: 100000
  });
  const [priceRange, setPriceRange] = React.useState({
    min: 0,
    max: 100000
  });
  
  const handleFilterToggle = (e) => {
    setToggleFilters(!toggleFilters);

    if (!toggleFilters) {
      setCategories(appliedCategories);
      setPriceRange(appliedPriceRange);
    }
  }

  const handleFilterClear = (e) => {
    e.preventDefault();
    setCategories({
      wanted: false,
      forSale: false,
      academicService: false
    });
    setPriceRange({
      min: 0,
      max: 100000
    });
  };

  const handleFilterApply = (e) => {
    e.preventDefault();
    setAppliedCategories(categories);
    setAppliedPriceRange(priceRange);
    // console.log(categories);
    // console.log(priceRange);
  };

  return (
    <div id='classified-ads'>
      <div id='classified-ads-heading'>
        <h1>Classified Ads</h1>
        <span id='page-subheading'>What are you looking for today?</span>
      </div>

      <div id='classified-ads-toolbar'>
        <div id='classified-ads-search'>
          <input id='classified-ads-searchbar' placeholder='Search...'></input>
          <span id='classified-ads-search-btn'>
          <FontAwesomeIcon icon={faMagnifyingGlass} style={{color: "#004c9b"}} />
          </span>
        </div>
        <span id='classified-ads-filter-btn' onClick={handleFilterToggle}>
          <FontAwesomeIcon icon={faSliders} style={{color: "#FFF"}} />
        </span><br></br>

        <div id='classified-ads-filter-options' style={{display: toggleFilters === true ? 'inline-block' : 'none'}}>
          <form onSubmit={handleFilterApply}>
            <span className='filter-options-header'>Category</span>
            <div id='filter-categories'>
              <div id='filter-items-wanted'>
                <input type='checkbox' id='items-wanted' name='wanted' checked={categories.wanted}
                  onChange={(e) => setCategories({...categories, wanted: e.target.checked})}></input>
                <label htmlFor="items-wanted">Items wanted</label>
              </div>
              <div id='filter-items-for-sale'>
                <input type='checkbox' id='items-for-sale' name='forSale' checked={categories.forSale}
                  onChange={(e) => setCategories({...categories, forSale: e.target.checked})}></input>
                <label htmlFor="items-for-sale">Items for sale</label>
              </div>
              <div id='filter-items-wanted'>
                <input type='checkbox' id='academic-services' name='academicServices' checked={categories.academicService}
                  onChange={(e) => setCategories({...categories, academicService: e.target.checked})}></input>
                <label htmlFor="academic-services">Academic services</label>
              </div>
            </div>
            <span className='filter-options-header'>Price</span>
            <div id='filter-price'>
              <div id='filter-min-price'>
                <label htmlFor="min-price">Min</label>
                <input type='number' id='min-price' name='minPrice' value={priceRange.min}
                  onChange={(e) => setPriceRange({...priceRange, min: e.target.value})}></input>
              </div>
              <div id='filter-max-price'>
                <label htmlFor="max-price">Max</label>
                <input type='number' id='max-price' name='maxPrice' value={priceRange.max}
                  onChange={(e) => setPriceRange({...priceRange, max: e.target.value})}></input>
              </div>
            </div>
            <div id='filter-control-btn'>
              <button onClick={handleFilterClear}>Clear</button>
              <input type="submit" value="Apply"></input>
            </div>
          </form>
        </div>
      </div>

      <div id='classified-ads-listing-info'>
        <span id='listing-total-count'>48 Listings</span>
        {/* <div id='listing-filters-applied'>
          <span>
            Items wanted
            <FontAwesomeIcon className='filter-applied-x' icon={faXmark} style={{color: "#FFF"}} />
          </span>
          <span>
            $50 - $100
            <FontAwesomeIcon className='filter-applied-x' icon={faXmark} style={{color: "#FFF"}} />
          </span>
        </div> */}
        <span id='listing-page-number'>Page 1 of 4</span>
      </div>

      <div id='classified-ads-listing-container'>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            {listingItems.map((item) => (
              <Grid key={item.id} item xs={4} sm={3} md={3} lg={2}>
                <Link to={'/classified-ads/' + item.id} style={{textDecoration: 'none'}}>
                  <Card className='listing-cards' sx={{ maxWidth: 345 }} style={{
                      boxShadow: '2px 2px 6px 2px rgba(0,0,0,0.14)'
                    }}>
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        height="140"
                        // image={item.image}
                        image={ListingImage}
                        // alt="green iguana"
                      />
                      <CardContent>
                        <Typography variant="body2" color="#004c9b" fontFamily={'Montserrat'} fontWeight={500} fontSize={'1em'}>
                          {item.listing_type}
                        </Typography>
                        <Typography variant="subtitle2" fontFamily={'Montserrat'} fontSize={'1em'}>
                          {item.listing_title}
                        </Typography>
                        <Typography variant="body2" fontFamily={'Montserrat'} color="#999" fontSize={'1em'}>
                          {item.location}
                        </Typography>
                        <Typography variant="body2" fontFamily={'Montserrat'} fontSize={'1em'}>
                          ${item.price}
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Link>
              </Grid>
            ))}
          </Grid>
        </Box>
      </div>
    </div>
  );
}

export default ClassifiedAdsListings;
