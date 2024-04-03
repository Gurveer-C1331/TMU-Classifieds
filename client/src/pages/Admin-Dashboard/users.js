import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import './Admin-Dashboard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import ListingImage from '../../assets/listing-image.svg';
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons';

function Users()
{
  const [users, setUsers] = useState([]);

  useEffect(() =>
  {
    //retrieve all listing items from server
    const fetchUsers = async () =>
    {
      try
      {
        const response = await fetch(`http://localhost:3001/api/dashboard/users`, {
          method: 'GET'
        })
          .then((response) => response.json())
          .then((data) => setUsers(data));
      } catch (error)
      {
        console.error("Error fetching classified listings data:", error);
      }
    };
    fetchUsers();
  }, []);

  console.log(users);

  return (
    <div class='main-page-container' id='home-page' className='main-page-container'>
      <div class="center">
        <table>
          <tr>
            <th>Username</th>
            <th>Name</th>
            <th>Gender</th>
            <th>Email</th>
            <th>Phone Number</th>
            <th>Home Address</th>
            <th>Date of Birth</th>
            <th></th>
          </tr>
          {
            users.map((user) =>
            (
              <tr>
                <td>{user.username}</td>
                <td>{user.firstname} {user.lastname}</td>
                <td>{user.sex}</td>
                <td>{user.email}</td>
                <td>{user.phoneNumber}</td>
                <td>{user.home_address}</td>
                <td>{user.date_of_birth.substring(0, 10)}</td>
                <td><button>Modify</button></td>
              </tr>
            ))
          }
        </table>
      </div>
    </div>
  );
}

export default Users;
