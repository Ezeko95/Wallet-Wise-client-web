import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../../redux/actions/index";
import { RootState } from "../../redux/store/index";
import profilePicture from "../../assets/user-33638_640.webp";
import axios from "axios";
import "./users.css";

const Users = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const users = useSelector((state: RootState) => state.users.users);
  const loading = useSelector((state: RootState) => state.users.loading);
  const error = useSelector((state: RootState) => state.users.error);

  useEffect(() => {
    dispatch(fetchUsers() as any);
  }, []);
  console.log(users)
  if (loading) {    
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }
  const togglePremium = async (userId: number) => {
    
    try {
      await axios.put(`user/${userId}`, {});
      dispatch(fetchUsers() as any);
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
