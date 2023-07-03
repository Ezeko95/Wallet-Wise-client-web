import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import profilePicture from "../../assets/user-33638_640.webp";
import axios from "axios";
import { User } from "../../redux/actions";
import "./Detail.css";

const Detail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [expense, setExpense] = useState([]);
  const [income, setIncome] = useState([]);
  const [users, setUsers] = useState<User | null>(null);

  useEffect(() => {
    const fetchUserDetail = async () => {
      try {
        const response = await axios.get(`user/${id}`);
        const userData = response.data;
        setUsers(userData);

        const expenses = await axios(`/movement/expenses/${id}`);
        const expenseArray = [];
        expenses.data?.forEach((acc) => {
          acc.expense.forEach((exp: []) => expenseArray.push(exp));
        });
        setExpense(expenseArray);

        const incomes = await axios(`/movement/incomes/${id}`);
        const incomeArray = [];
        incomes.data?.forEach((acc) => {
          acc.income.forEach((inc: []) => incomeArray.push(inc));
        });
        setIncome(incomeArray);
      } catch (error) {
        console.log(error);
      }
    };
    fetchUserDetail();
  }, [id]);

  if (users === null) {
    return <p>Loading user data...</p>;
  }

  const handleClick = () => {
    navigate("/home");
  };

  return (
    <div className="all-container">
      <button onClick={handleClick}>Back</button>
      <div className="detail-container">
        <div className="user-detail">
          <img
            src={profilePicture}
            className="image"
            alt="user"
            height="200px"
          />
          <h2>User Detail</h2>
          <p>ID: {users.id}</p>
          <p>Name: {users.name}</p>
          <p>Email: {users.email}</p>
          <p>State: {users.active ? "Active" : "Suspeded/Banned"}</p>
          <p>Premium: {users.premium ? "Premium" : "Not Premium"}</p>
          <p>Fecha de creacion de usuario: {users.createdAt}</p>
          <p>Ultima actividad: {users.updatedAt}</p>
          {users.balance && (
            <div className="total-balance">
              <h3>Balance</h3>
              <p>Total: {users.balance.total}</p>
            </div>
          )}
        </div>
        <div className="expense-income">
          <div className="expense-container">
            <h1>User Expenses</h1>
            {expense &&
              expense.map((e, index) => {
                return (
                  <div key={index}>
                    <h3>
                      {e.description}: - {e.amount}
                    </h3>
                  </div>
                );
              })}
          </div>
          <div className="income-container">
            <h1>User Incomes</h1>
            {income &&
              income.map((e, index) => {
                return (
                  <div key={index}>
                    <h3>
                      {e.type}: + {e.amount}
                    </h3>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
