import axios from "axios";
import { useState, useEffect } from "react";
import "./Home.css";
import userImage from "../../assets/user-33638_640.webp";
import { Logout } from "../../components/Logout/Logout";
import WakeUpNeo from "../../components/Wake up, Neo/WakeUpNeo";

export const Home = () => {
  const [users, setUsers] = useState<any[]>([]);
  const [showGif, setShowGif] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://wisewalletfinal.onrender.com/user/"
        );
        setUsers(response.data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    const timeout = setTimeout(() => {
      setShowGif(false);
      fetchData();
    }, 5000);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

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
      <WakeUpNeo text={"Wake up, Neo..."}></WakeUpNeo>
      <Logout />
      {showGif ? (
        <img
          src="https://i.giphy.com/media/xTkcEQACH24SMPxIQg/giphy.webp"
          alt="GIF"
          height="200px"
          width="200px"
          
        />
      ) : (
        <>
          <h1>USERS</h1>
          {users.map((user: any) => (
            <div key={user.id} className="user-row">
              <img src={userImage} alt="user" height="40px" width="40px" />
              <h3>{user.id}</h3>
              <h3>{user.name}</h3>
              <h3>{user.email}</h3>
              <h3>{user.premium ? "Premium" : "Not Premium"}</h3>
              <button onClick={() => togglePremium(user.id)}>
                Toggle Premium
              </button>
            </div>
          ))}
        </>
      )}
    </div>
  );
};


export default Home;
