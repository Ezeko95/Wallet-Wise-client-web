import "./Home.css";
import { useEffect } from "react";
import Users from "../../components/Users/Users";
import Navbar from "../../components/NavBar/NavBar";
import { RootState } from "../../redux/store/index";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers, User } from "../../redux/actions/index";

export const Home = () => {
  const dispatch = useDispatch();
  const filteredUsers = useSelector((state: RootState) => state.users.filteredUsers) as User[];

  useEffect(() => {
    dispatch(fetchUsers() as any);
  }, []);

  return (
    <div className="home-container">
      <Navbar></Navbar>
      <Users users={filteredUsers}></Users>
    </div>
  );
};

export default Home;
