import "./Home.css";
import { useEffect, useState } from "react";
import Users from "../../components/Users/Users";
import Navbar from "../../components/NavBar/NavBar";
import { RootState } from "../../redux/store/index";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers, User } from "../../redux/actions/index";
import Lottie from "lottie-react"
import loading from "../../assets/loading.json"

export const Home = () => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);
  const filteredUsers = useSelector((state: RootState) => state.users.filteredUsers) as User[];
  
  useEffect(() => {
    dispatch(fetchUsers() as any).then(() => {
      setTimeout(() => {
        setIsLoading(false);
      }, 1500);
    });
  }, []);
  
  return (
    <div style={{minWidth:"200px", minHeight: "200px"}}>
      {isLoading ? (
        <Lottie animationData={loading} />
        ) : (
          <div>
          <Navbar></Navbar>
          <Users users={filteredUsers}></Users>
          </div>
      )}
    </div>
  );
};

export default Home;
