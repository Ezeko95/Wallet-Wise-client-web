import profilePicture from "../../assets/user-33638_640.webp";
import { useNavigate } from "react-router-dom";
import { User } from "../../redux/actions";
import { useState } from "react";
import axios from "axios";
import "./users.css";

const Users = () => {
  const navigate = useNavigate();

  const handleUserClick = (userId: number) => {
    navigate(`/detail/${userId}`);
  };
  console.log(users)

  return (
    <div>
      {users &&
        users.map((user) => (
          <div key={user.id} className="users">
            <div className="user-info">
              <img src={profilePicture} alt="user" height="20px" />
              <p>{user.id}</p>
              <p>{user.name}</p>
              <p>{user.email}</p>
              <p>{user.premium ? "Premium" : "Not Premium"}</p>
            </div>
            <div className="button-container">
              <button onClick={() => togglePremium(user.id)}>
                Toggle Premium
              </button>
              <button onClick={() => handleUserClick(user.id)}>
                View Details
              </button>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Users;
