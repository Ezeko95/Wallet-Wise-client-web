import "./Home.css";
import { useNavigate } from "react-router-dom";
// import FakeUsers from "./userFake";
import Users from "../../components/Users/users";


export const Home = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    navigate("/");
  };
  return (
    <div className="home-container">
      <div className="logout">
        <button onClick={handleLogout}>Logout</button>
      </div>
      <div className="user-container">
        <Users></Users>
      </div>
    </div>
  );
};

export default Home;
