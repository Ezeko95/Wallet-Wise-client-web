import Pagination from "../../components/Pagination/pagination";
import Users from "../../components/Users/users";
import { useEffect, useState } from "react";
import { useDispatch, useSelector} from "react-redux";
import { RootState } from "../../redux/store/index";
import { fetchUsers } from "../../redux/actions/index";
import { useNavigate } from "react-router-dom";
import "./Home.css";

export const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const users = useSelector((state: RootState) => state.users.users);
  const loading = useSelector((state: RootState) => state.users.loading);
  const error = useSelector((state: RootState) => state.users.error);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 8;

  const handleLogout = () => {
    navigate("/");
  };

  useEffect(() => {
    dispatch(fetchUsers() as any);
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

// SEARCH BAR
const handleSearchInputChange = (
  event: React.ChangeEvent<HTMLInputElement>
) => {
  setSearchQuery(event.target.value);
};

// Filter the users based on the search query
const filteredUsers = users.filter((user) =>
  user.name.toLowerCase().includes(searchQuery.toLowerCase())
);

// PAGINADO
const startIndex = (currentPage - 1) * itemsPerPage;
const endIndex = startIndex + itemsPerPage;
const paginatedUsers = filteredUsers.slice(startIndex, endIndex);

const handlePageChange = (pageNumber: number) => {
  setCurrentPage(pageNumber);
};

  return (
    <div className="home-container">
      <div className="navbar">
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearchInputChange}
            placeholder="Search by name..."
            className="search-input"
            />
        <button onClick={handleLogout}>Logout</button>
            </div>
      <div className="user-container">
        <Pagination
          currentPage={currentPage}
          totalPages={Math.ceil(filteredUsers.length / itemsPerPage)}
          onPageChange={handlePageChange}
        />
        <Users users={paginatedUsers} />
      </div>
    </div>
  );
};

export default Home;
