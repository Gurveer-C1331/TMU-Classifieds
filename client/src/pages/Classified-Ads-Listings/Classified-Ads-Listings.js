import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { CardActionArea } from '@mui/material';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faSliders } from '@fortawesome/free-solid-svg-icons';
import './Classified-Ads-Listings.css';
import ItemWantedImage from '../../assets/announce.jpg';
import ItemForSaleImage from '../../assets/on-sale.jpg';
import AcademicServiceImage from '../../assets/library.jpg';

function useQuery() {
  const { search } = useLocation();

  return React.useMemo(() => new URLSearchParams(search), [search]);
}

function ClassifiedAdsListings() {
  let query = useQuery();
  let navigate = useNavigate();

  //initialize URL query parameters
  let searchQuery = query.get('search') ? query.get('search') : null;
  let categoryQuery = query.get('category') ? query.get('category').split(',') : null;
  let minPriceQuery = query.get('minPrice') ? query.get('minPrice') : null;
  let maxPriceQuery = query.get('maxPrice') ? query.get('maxPrice') : null;
  
  const [listingItems, setlistingItems] = useState([]);
  const [totalAdsCount, setTotalAdsCount] = useState([]);
  const [toggleFilters, setToggleFilters] = useState(false);
  const [searchString, setSearchString] = useState(searchQuery ? searchQuery : '');
  const [categories, setCategories] = useState({
    wanted: categoryQuery ? categoryQuery.includes('wanted') : false,
    forSale: categoryQuery ? categoryQuery.includes('forSale') : false,
    academicService: categoryQuery ? categoryQuery.includes('academicService') : false,
  });
  const [appliedCategories, setAppliedCategories] = useState({
    wanted: categoryQuery ? categoryQuery.includes('wanted') : false,
    forSale: categoryQuery ? categoryQuery.includes('forSale') : false,
    academicService: categoryQuery ? categoryQuery.includes('academicService') : false,
  });
  const [appliedPriceRange, setAppliedPriceRange] = useState({
    min: minPriceQuery ? minPriceQuery : 0,
    max: maxPriceQuery ? maxPriceQuery : 100000
  });
  const [priceRange, setPriceRange] = useState({
    min: minPriceQuery ? minPriceQuery : 0,
    max: maxPriceQuery ? maxPriceQuery : 100000
  });
  const maxItemsPerPage = 20;
  const [page, setPage] = React.useState(1);
  const handleChange = (event, value) => {
    setPage(value);
  };

  useEffect(() => {
    //retrieve all listing items from server
    const fetchLisitingItems = async () => {
      try {
        const response = await fetch(`http://localhost:3001/api/listings/${searchQuery}-${categoryQuery}-${minPriceQuery}-${maxPriceQuery}-${page}`, {
          method: 'GET'
        })
          .then((response) => response.json())
          .then((data) => {
            setlistingItems(data.ads);
            setTotalAdsCount(data.count);
          });
      } catch (error) {
        console.error("Error fetching classified listings data:", error);
      }
    };
    fetchLisitingItems();
  }, [searchQuery, categoryQuery ? categoryQuery.length : null, categoryQuery ? categoryQuery[0] : null, minPriceQuery, maxPriceQuery, page]);
  
  /*
  * Handles filter toggle button click event
  */
  const handleFilterToggle = (e) => {
    setToggleFilters(!toggleFilters);

    if (!toggleFilters) {
      setCategories(appliedCategories);
      setPriceRange(appliedPriceRange);
    }
  }

  /*
  * Handles 'Clear' button click event
  */
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

  /*
  * Handles 'Apply' button click event
  */
  const handleFilterApply = (e) => {
    e.preventDefault();
    setAppliedCategories(categories);
    setAppliedPriceRange(priceRange);
    
    updateQueryParam();
  };

  /*
  * Handle search button click event
  */
  const handleSearchClick = (e) => {
    e.preventDefault();
    searchQuery = searchString;

    updateQueryParam();
  }

  /*
  * Updates the URL query parameters
  */
  const updateQueryParam = () => {

    let tempCatQuery = [];
    
    if (categories.wanted) tempCatQuery.push('wanted');
    if (categories.forSale) tempCatQuery.push('forSale');
    if (categories.academicService) tempCatQuery.push('academicService');
    categoryQuery = tempCatQuery;
    minPriceQuery = priceRange.min;
    maxPriceQuery = priceRange.max;

    navigate(`?search=${searchQuery ? searchQuery : ''}&category=${categoryQuery}&minPrice=${minPriceQuery}&maxPrice=${maxPriceQuery}`);
  }
  
  return (
    <div id='classified-ads' className='main-page-container'>
      <div id='classified-ads-heading'>
        <h1>Classified Ads</h1>
        <span className='subtitle-text'>What are you looking for today?</span>
      </div>

      <div id='classified-ads-toolbar'>
        <div id='classified-ads-search'>
          <input id='classified-ads-searchbar' placeholder='Search...' value={searchString}
            onChange={(e) => setSearchString(e.target.value)}></input>
          <span id='classified-ads-search-btn' onClick={handleSearchClick}>
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
        <span id='listing-total-count'>{totalAdsCount} Listings</span>
        <span id='listing-page-number'>Page {page} of {Math.ceil(totalAdsCount/maxItemsPerPage)}</span>
      </div>

      <div id='classified-ads-listing-container'>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            {listingItems.map((item) => (
              <Grid key={item.ad._id} item xs={4} sm={3} md={3} lg={2}>
                <Link to={'/classified-ads/' + item.ad._id} style={{textDecoration: 'none'}}>
                  <Card className='listing-cards' sx={{ maxWidth: 345 }} style={{
                      boxShadow: '2px 2px 6px 2px rgba(0,0,0,0.14)'
                    }}>
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        height="140"
                        // image={item.image}
                        image={ (item.category === 'Item wanted' && ItemWantedImage) ||
                        (item.category === 'Item for sale' && ItemForSaleImage) ||
                        (item.category === 'Academic service' && AcademicServiceImage) }
                        // alt="green iguana"
                      />
                      <CardContent>
                        <Typography variant="body2" color="#004c9b" fontFamily={'Montserrat'} fontWeight={500} fontSize={'1em'}>
                          {item.category}
                        </Typography>
                        <Typography variant="subtitle2" fontFamily={'Montserrat'} fontSize={'1em'}>
                          {item.ad.adName}
                        </Typography>
                        <Typography variant="body2" fontFamily={'Montserrat'} color="#999" fontSize={'1em'}>
                          {item.ad.location}
                        </Typography>
                        <Typography variant="body2" fontFamily={'Montserrat'} fontSize={'1em'}>
                          {item.category === 'Item wanted' ? '' : '$' + item.ad.price}
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

      <div id='classified-ads-pagination'>
        <Stack spacing={2} style={{
            alignItems: 'center'
          }}>
          <Pagination id='pagination-sm' count={Math.ceil(totalAdsCount/maxItemsPerPage)} page={page} boundaryCount={2} size='small' onChange={handleChange}/>
          <Pagination id='pagination-md' count={Math.ceil(totalAdsCount/maxItemsPerPage)} page={page} boundaryCount={2} size='' onChange={handleChange}/>
          <Pagination id='pagination-lg' count={Math.ceil(totalAdsCount/maxItemsPerPage)} page={page} boundaryCount={2} size='large'  color='primary' onChange={handleChange}/>
        </Stack>
      </div>
    </div>
  );
}

export default ClassifiedAdsListings;
