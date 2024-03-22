import React from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';

import './App.css';

import Nav from './components/Nav/Nav';
import NavAuthenticated from './components/Nav-Authenticated/Nav-Authenticated';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import ClassifiedAds from './pages/Classified-Ads/Classified-Ads';

function App() {
  return (
    <div className="App">
      {/* <Nav></Nav> */}
      <NavAuthenticated></NavAuthenticated>
      
      <Routes>
        <Route exact path='/' element={<Home></Home>}></Route>
        <Route exact path='/classified-ads' element={<ClassifiedAds></ClassifiedAds>}></Route>
      </Routes>
      <Outlet></Outlet>

      <Footer></Footer>
    </div>
  );
}

export default App;
