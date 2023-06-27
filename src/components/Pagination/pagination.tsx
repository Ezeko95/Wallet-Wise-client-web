import { useState } from "react";
import userData from "../../assets/MOCK_DATA.json"

interface User {
    name: string;
    email: string;
    picture: string;
    premium: boolean;
}
const Pagination = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [usersPerPage] = useState(10); 
    const [users, setUsers] = useState<User[]>([]); 

    setUsers(userData)
    return
}

export default Pagination;
