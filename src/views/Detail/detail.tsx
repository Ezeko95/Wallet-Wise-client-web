import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import profilePicture from "../../assets/user-33638_640.webp";
import axios from "axios";
import { User } from "../../redux/actions";
import "./detail.css"

const Detail = () => {
  const { id } = useParams<{ id: string }>();

  const [users, setUsers] = useState<User | null>(null)
  useEffect(() => {
    const fetchUserDetail = async () => {
      try {
        const response = await axios.get(`user/${id}`);
        const userData = response.data;
        setUsers(userData);
      } catch (error) {
        console.log(error);
      }
    };
  
    fetchUserDetail();
  }, [id]);

  if (users === null) {
    return <p>Loading user data...</p>;
  }

  return (
    <div>
      <div className="detail-container">
        <img src={profilePicture} alt="user" height="200px" />
        <h2>User Detail</h2>
        <p>ID: {users.id}</p>
        <p>Name: {users.name}</p>
        <p>Email: {users.email}</p>
        <p>Premium: {users.premium ? "Premium" : "Not Premium"}</p>
        <p>Fecha de creacion de usuario: {users.createdAt}</p>
        {/* {users.balance && (
          <div>
            <h3>Balance</h3>
            <p>Total: {users.balance.total}</p>
            {/* Display other balance properties as needed 
          </div>
        )} */}
      </div>
    </div>
  );
};

export default Detail;
