import Users from "../../components/Users/users";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../../redux/actions/index";
import { RootState } from "../../redux/store/index";
import "./Home.css";
import Pagination from "../../components/Pagination/pagination";

export const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const users = useSelector((state: RootState) => state.users.users);
  const loading = useSelector((state: RootState) => state.users.loading);
  const error = useSelector((state: RootState) => state.users.error);
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

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedUsers = users.slice(startIndex, endIndex);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="home-container">
      <div className="logout">
        <button onClick={handleLogout}>Logout</button>
      </div>
      <div className="user-container">
        <Pagination
          currentPage={currentPage}
          totalPages={Math.ceil(users.length / itemsPerPage)}
          onPageChange={handlePageChange}
        />
        <Users users={paginatedUsers} />
        <Pagination
          currentPage={currentPage}
          totalPages={Math.ceil(users.length / itemsPerPage)}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
};

export default Home;

