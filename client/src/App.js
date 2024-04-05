import React, { useEffect, useState } from 'react';
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
import NewAd from './pages/New-Ad/posting';
import CommsPlatform from './pages/Communication/Communication';
import OldChats from './pages/Communication/Old-Chats';
import AdminDashboard from './pages/Admin-Dashboard/Admin-Dashboard';
import Users from './pages/Admin-Dashboard/users';
import Register from './pages/Register/Register';
import Login from './pages/Login/Login';

function App(){
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  
  useEffect(() => {
    const checkUser = async () => {
      if (localStorage.getItem('username')) {
        try {
          const signedInResponse = await fetch(`http://localhost:3001/api/user/isSignedIn/${localStorage.getItem('username')}`, {
            method: 'GET'
          })
          .then((response) => {
            if (response.ok) setIsSignedIn(true);
            else setIsSignedIn(false);
          });
        } catch (error) {
          console.error("Error checking user is signed in:", error);
          setIsSignedIn(false);
        }
  
        try {
          const signedInResponse = await fetch(`http://localhost:3001/api/user/isAdmin/${localStorage.getItem('username')}`, {
            method: 'GET'
          })
          .then((response) => {
            if (response.ok) setIsAdmin(true);
            else setIsAdmin(false);
          });
        } catch (error) {
          console.error("Error checking user is an admin user:", error);
          setIsAdmin(false);
        }
      }
    };
    checkUser();
  }, [localStorage.getItem('username')]);

  if(isAdmin){
    return (
      <div className="App">
        <NavAdmin></NavAdmin>
  
        <Routes>
          <Route exact path='/' element={<HomeAdmin></HomeAdmin>}></Route>
          <Route exact path='/dashboard' element={<AdminDashboard></AdminDashboard>}></Route>
          <Route exact path='/users' element={<Users></Users>}></Route>
          <Route exact path='/signup' element={<Register></Register>}></Route>
          <Route exact path='/login' element={<Login></Login>}></Route>
          <Route exact path='/classified-ads' element={<ClassifiedAdsCatalog></ClassifiedAdsCatalog>}></Route>
          <Route exact path='/classified-ads/:listing-id' element={<ClassifiedAdsItem></ClassifiedAdsItem>}></Route>
          <Route exact path='/New-Ad' element={<NewAd></NewAd>}></Route>
          <Route exact path='/Comms' element={<CommsPlatform></CommsPlatform>}></Route>
          <Route exact path='/Old-Chats' element={<OldChats></OldChats>}></Route>
          <Route exact path='/register' element={<Register></Register>}></Route>
          <Route exact path='/login' element={<Login></Login>}></Route>
        </Routes>
        <Outlet></Outlet>
  
        <Footer></Footer>
      </div>
    );
  }else if(isSignedIn){
    return (
      <div className="App">
        <NavAuthenticated></NavAuthenticated>
        
        <Routes>
          <Route exact path='/' element={<HomeAuthenticated></HomeAuthenticated>}></Route>
          <Route exact path='/dashboard' element={<AdminDashboard></AdminDashboard>}></Route>
          <Route exact path='/users' element={<Users></Users>}></Route>
          <Route exact path='/signup' element={<Register></Register>}></Route>
          <Route exact path='/login' element={<Login></Login>}></Route>
          <Route exact path='/classified-ads' element={<ClassifiedAdsCatalog></ClassifiedAdsCatalog>}></Route>
          <Route exact path='/classified-ads/:listing-id' element={<ClassifiedAdsItem></ClassifiedAdsItem>}></Route>
          <Route exact path='/New-Ad' element={<NewAd></NewAd>}></Route>
          <Route exact path='/Comms' element={<CommsPlatform></CommsPlatform>}></Route>
          <Route exact path='/Old-Chats' element={<OldChats></OldChats>}></Route>
          <Route exact path='/register' element={<Register></Register>}></Route>
          <Route exact path='/login' element={<Login></Login>}></Route>
        </Routes>
        <Outlet></Outlet>
  
        <Footer></Footer>
      </div>
    );

  }else{
    return (
      <div className="App">
        <Nav></Nav>
  
        <Routes>
          <Route exact path='/' element={<Home></Home>}></Route>
          <Route exact path='/dashboard' element={<AdminDashboard></AdminDashboard>}></Route>
          <Route exact path='/users' element={<Users></Users>}></Route>
          <Route exact path='/signup' element={<Register></Register>}></Route>
          <Route exact path='/login' element={<Login></Login>}></Route>
          <Route exact path='/classified-ads' element={<ClassifiedAdsCatalog></ClassifiedAdsCatalog>}></Route>
          <Route exact path='/classified-ads/:listing-id' element={<ClassifiedAdsItem></ClassifiedAdsItem>}></Route>
          <Route exact path='/New-Ad' element={<NewAd></NewAd>}></Route>
          <Route exact path='/Comms' element={<CommsPlatform></CommsPlatform>}></Route>
          <Route exact path='/Old-Chats' element={<OldChats></OldChats>}></Route>
          <Route exact path='/register' element={<Register></Register>}></Route>
          <Route exact path='/login' element={<Login></Login>}></Route>
        </Routes>
        <Outlet></Outlet>
  
        <Footer></Footer>
      </div>
    );
  }
  
}

export default App;
