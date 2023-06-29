import Pagination from "../../components/Pagination/pagination";
import profilePicture from "../../assets/user-33638_640.webp"
import { useDispatch, useSelector} from "react-redux";
import { fetchUsers } from "../../redux/actions/index";
import { RootState } from "../../redux/store/index";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import "./Home.css";

export const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const usersRedux = useSelector((state: RootState) => state.users.users);
  const loading = useSelector((state: RootState) => state.users.loading);
  const [users, setUsers] = useState(usersRedux);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredUsers, setFilteredUsers] = useState(usersRedux);
  const itemsPerPage = 8;

  const handleLogout = () => {
    navigate("/");
  };

  useEffect(() => {
    dispatch(fetchUsers() as any);
  }, []);

  useEffect(() => {
    setUsers(usersRedux);
    setCurrentPage(1);
  }, [usersRedux]);

  if (loading) {
    return <p>Loading...</p>;
  }

  const handleUserClick = (userId: number) => {
    navigate(`/detail/${userId}`);
  };

  // toggle premium
  const togglePremium = async (userId: number) => {
    try {
      const updatedUsers = users.map((user: any) => {
        if (user.id === userId) {
          return { ...user, premium: !user.premium };
        }
        return user;
      });
      setUsers(updatedUsers);
      await axios.put(`user/${userId}`);
      console.log("Premium status updated successfully!");
    } catch (error) {
      console.error("Error updating premium status:", error);
    }
  };
  
  // search
  const handleSearchInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value;
    setSearchQuery(query);
  
    const filtered = users.filter((user) =>
      user.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredUsers(filtered);
  };

  // Pagination
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedUsers = users.slice(startIndex, endIndex);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="home-container">
      <div className="navbar">
        <input
          type="text"
          placeholder="Search by name..."
           onChange={handleSearchInputChange}
          className="search-input"
        />
        <button onClick={handleLogout}>Logout</button>
      </div>
        <Pagination
          currentPage={currentPage}
          totalPages={Math.ceil(users.length / itemsPerPage)}
          onPageChange={handlePageChange}
        />
      <div>
        {paginatedUsers.map((user) => (
          <div key={user.id} className="users">
            <div className="user-info">
              <img src={profilePicture} alt="user" height="40px" />
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
    </div>
  );
};

export default Home;
