import "./navbar.css"
import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { filterUsers } from '../../redux/reducer';
import { removeCookie } from "typescript-cookie";

const NavBar = () => {
    const navigate = useNavigate()
  const dispatch = useDispatch();
  
  const handleSearchInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchQuery = event.target.value;
    dispatch(filterUsers(searchQuery));
  };
  const handleLogOut = () => {
    removeCookie("accessToken");
    navigate("/")
  }
  const handleAnalytics = () => {
    navigate("/analytics")
  }

  return (
    <div className="navbar">
      <button onClick={handleAnalytics}>Analytics</button>
      <input type="text" onChange={handleSearchInputChange} placeholder="Search users by name" />
    <button onClick={handleLogOut}>Logout</button>
    </div>
  );
};

export default NavBar;

