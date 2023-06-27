import { useNavigate } from "react-router-dom";
import profilePicture from "../../assets/user-33638_640.webp";
import axios from "axios";
import "../../components/Users/users.css";
import userData from "../../assets/MOCK_DATA.json"
const FakeUsers = () => {
    
    const navigate = useNavigate()
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
    
    console.log(userData)
  return (
    <div>
      {userData &&
        userData.map((user) => (
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

export default FakeUsers;