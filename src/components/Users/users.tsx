import profilePicture from "../../assets/user-33638_640.webp";
import { useNavigate } from "react-router-dom";
import { User } from "../../redux/actions";
import axios from "axios";
import "./users.css";

interface UsersProps {
  users: User[];
}

const Users = ({ users }: UsersProps) => {
  const navigate = useNavigate();

const togglePremium = async (userId: number) => {
  try {
    await axios.put(`user/${userId}`, {});
  } catch (error: any) {
    console.log(error.message);
  }
};

  const handleUserClick = (userId: number) => {
    navigate(`/detail/${userId}`);
  };

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
              <button onClick={() => handleUserClick(user.id)}>View Details</button>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Users;
