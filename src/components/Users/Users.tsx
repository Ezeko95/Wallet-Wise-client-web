import profilePicture from "../../assets/user-33638_640.webp";
import Pagination from "../Pagination/pagination";
import { User } from "../../redux/actions/index";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import axios from "axios";
import "./users.css";

const Users: React.FC<{ users: User[] }> = ({ users }) => {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  // Pagination
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedUsers = users.slice(startIndex, endIndex);
  const totalPages = Math.ceil(users.length / itemsPerPage);
  
  // details
  const handleUserClick = (userId: number) => {
    navigate(`/detail/${userId}`);
  };

  // toggle premium
  const togglePremium = async (userId: number) => {
    try {
      await axios.put(`user/${userId}`);
      alert(`User with id ${userId} has been upgraded to premium!`);
      window.location.reload();
    } catch (error) {
      console.error("Error updating premium status:", error);
    }
  };

  // ban user
  const banUser = async (userId: number) => {
    try {
      await axios.put(`admin/ban/${userId}`);
      alert(`User with id ${userId} has been banned`);
      window.location.reload();
    } catch (error) {
      console.error("Error updating user active status:", error);
    }
  }; 
  

  // suspend user
  const suspendUser = async (userId: number) => {
    try {
      const date = new Date();
      date.setDate(date.getDate() + 1);
      await axios.put(`/admin/suspend/${userId}`, { date });
      alert(`User with id ${userId}  has been suspended temporarly`);
      window.location.reload();
    } catch (error) {
      console.error("Error updating user active status:", error);
    }
  };

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };


  return (
    <div className="user-container">
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
      {paginatedUsers.map((user) => (
        <div key={user.id} className="users">
          <div className="user-info">
            <img src={profilePicture} alt="user" height="40px" />
            <p>{user.id}</p>
            <p>{user.name}</p>
            <p>{user.email}</p>
            <p>{user.active ? "Active" : "Suspended/Banned"}</p>
            <p>{user.premium ? "Premium" : "Not Premium"}</p>
          </div>
          <div className="button-container">
            <div className="button-action">
              <select className="select-with-color">
                <option value="ban">Ban user</option>
                <option value="suspend">Suspend User</option>
              </select>
              <button
                className="ban-suspend-button"
                onClick={() => {
                  const selectedOption = document.querySelector("select").value;
                  if (selectedOption === "ban") {
                    banUser(user.id);
                  } else if (selectedOption === "suspend") {
                    suspendUser(user.id);
                  }
                }}
              >
                Apply
              </button>
            </div>
            <button
              className="premium-button"
              onClick={() => togglePremium(user.id)}
            >
              Toggle Premium
            </button>
            <button className="detail-button"onClick={() => handleUserClick(user.id)}>
              View Details
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Users;
