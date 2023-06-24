import axios from "axios";
import { useState, useEffect } from "react";
import "./Home.css"
import userImage from "../../assets/user-33638_640.webp"

export const Home = () => {
    const [users, setUsers] = useState<any[]>([]);
    // const [userStatus, setUserStatus] = 

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get("https://wisewalletfinal.onrender.com/user/");
          setUsers(response.data);
        } catch (error) {
          console.error("Error fetching users:", error);
        }
      };
  
      fetchData();
    }, []);
    console.log(users)

    const togglePremium = async (userId: number) => {
        try {
          const updatedUsers = users.map((user: any) => {
            if (user.id === userId) {
              return { ...user, premium: !user.premium };
            }
            return user;
          });
    
          setUsers(updatedUsers);
    
          await axios.put(`https://wisewalletfinal.onrender.com/user/${userId}`);
          console.log("Premium status updated successfully!");
        } catch (error) {
          console.error("Error updating premium status:", error);
        }
      };
    
      return (
        <div className="user-container">
          <h1>USERS</h1>
          {users.map((user: any) => (
            <div key={user.id} className="user-row">
              <img src={userImage} alt="user"height="40px" width="40px"/>
              <h3>{user.id}</h3>
              <h3>{user.name}</h3>
              <h3>{user.email}</h3>
              <h3>{user.premium ? "Premium" : "Not Premium"}</h3>
              <button onClick={() => togglePremium(user.id)}>Toggle Premium</button>
            </div>
          ))}
          </div>
      );
    };

export default Home;
