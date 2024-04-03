import React from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';

import './App.css';
import './theme.css';

import Nav from './components/Nav/Nav';
import NavAuthenticated from './components/Nav-Authenticated/Nav-Authenticated';
import NavAdmin from './components/Nav-Admin/Nav-Admin';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import HomeAuthenticated from './pages/Home-Authenticated/Home-Authenticated';
import HomeAdmin from './pages/Home-Admin/Home-Admin';
import ClassifiedAdsCatalog from './pages/Classified-Ads-Listings/Classified-Ads-Listings';
import ClassifiedAdsItem from './pages/Classified-Ads-Item/Classified-Ads-Item';
import AdminDashboard from './pages/Admin-Dashboard/Admin-Dashboard';
import Users from './pages/Admin-Dashboard/users';

function App()
{
  return (
    <div className="App">
      {/* <Nav></Nav> */}

      <NavAdmin></NavAdmin>

      <Routes>
        {/* <Route exact path='/' element={<Home></Home>}></Route> */}
        <Route exact path='/' element={<HomeAuthenticated></HomeAuthenticated>}></Route>
        <Route exact path='/' element={<HomeAdmin></HomeAdmin>}></Route>
        <Route exact path='/dashboard' element={<AdminDashboard></AdminDashboard>}></Route>
        <Route exact path='/users' element={<Users></Users>}></Route>
        <Route exact path='/classified-ads' element={<ClassifiedAdsCatalog></ClassifiedAdsCatalog>}></Route>
        <Route exact path='/classified-ads/:listing-id' element={<ClassifiedAdsItem></ClassifiedAdsItem>}></Route>
      </Routes>
      <Outlet></Outlet>

      <Footer></Footer>
    </div>
  );
}

export default App;
