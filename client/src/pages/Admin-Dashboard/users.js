import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import './Admin-Dashboard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import ListingImage from '../../assets/listing-image.svg';
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons';
import { text } from '@fortawesome/fontawesome-svg-core';
import { alignProperty } from '@mui/material/styles/cssUtils';

function modify(user)
{
  const form = document.getElementById("user-info");
  form.elements["uname"].value = user.username;
  form.elements["fname"].value = user.firstname;
  form.elements["lname"].value = user.lastname;
  form.elements["gender"].value = user.sex;
  form.elements["email"].value = user.email;
  form.elements["phone"].value = user.phoneNumber;
  form.elements["addr"].value = user.home_address;
  form.elements["dob"].value = user.date_of_birth;
}

function Users()
{
  const [status, setStatus] = useState(0);
  const [users, setUsers] = useState([]);

  useEffect(() =>
  {
    const fetchUsers = async () =>
    {
      console.log(status);
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
  }, [status]);

  function submit()
  {
    const form = document.getElementById("user-info");
    if (form.elements["uname"].value == "" ||
      form.elements["fname"].value == "" ||
      form.elements["lname"].value == "" ||
      form.elements["gender"].value == "" ||
      form.elements["email"].value == "" ||
      form.elements["phone"].value == "" ||
      form.elements["addr"].value == "" ||
      form.elements["dob"].value == "")
    {
      return;
    }

    const updateUser = async () =>
    {
      try
      {
        const response = await fetch(`http://localhost:3001/api/dashboard/users/update/${form.elements["uname"].value}-${form.elements["fname"].value}-${form.elements["lname"].value}-${form.elements["gender"].value}-${form.elements["email"].value}-${form.elements["phone"].value}-${form.elements["addr"].value}-${form.elements["dob"].value}`, {
          method: 'GET'
        })
          .then((response) => response.json())
      } catch (error)
      {
        console.error("Error fetching classified listings data:", error);
      }
    };
    updateUser();
    setStatus(status + 1);
  }

  function deleteUser()
  {
    const form = document.getElementById("user-info");

    if (form.elements["email"].value == "")
    {
      return;
    }

    const deleteUser = async () =>
    {
      try
      {
        const response = await fetch(`http://localhost:3001/api/dashboard/users/delete/${form.elements["email"].value}`, {
          method: 'GET'
        })
          .then((response) => response.json())
      } catch (error)
      {
        console.error("Error fetching classified listings data:", error);
      }
    };
    deleteUser();
    setStatus(status + 1);
  }

  return (
    <div class='main-page-container' id='home-page' className='main-page-container'>
      <div class="center">
        <h1 class="center">User Management</h1>
        <p class="center">Select a user then update their information or press delete to remove them.</p>
        <form id="user-info">
          Username <input type="text" name="uname" />
          First Name <input type="text" name="fname" />
          Last Name <input type="text" name="lname" />
          Gender <input type="text" name="gender" />
          <br></br>
          Email <input type="text" name="email" />
          Phone Number <input type="text" name="phone" />
          Home Address <input type="text" name="addr" />
          Date of Birth <input type="text" name="dob" />
        </form>
        <div class="center">
          <button onClick={submit}>Modify</button>
          <button onClick={deleteUser}>Delete User</button>
        </div>
      </div>
      <br></br>
      <br></br>

      <div class="center">
        <table id="user-table">
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
              <tr key={user.email} id={user.email}>
                <td>{user.username}</td>
                <td>{user.firstname} {user.lastname}</td>
                <td>{user.sex}</td>
                <td>{user.email}</td>
                <td>{user.phoneNumber}</td>
                <td>{user.home_address}</td>
                <td>{user.date_of_birth.substring(0, 10)}</td>
                <td><button onClick={e => modify(user)}> Select </button></td>
              </tr>
            ))
          }
        </table>
      </div>
    </div >
  );
}

export default Users;
