import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Landing.css";
export const Landing: React.FC = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [showAlert, setShowAlert] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });

    if (name === "email" && showAlert && value === "") {
      setShowAlert(false);
    } else if (name === "password" && showAlert && value === "") {
      setShowAlert(false);
    }
  };

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Check if the entered credentials match the admin credentials
    if (form.email === "Wallet-Wise-Admin" && form.password === "admin123") {
      // Redirect to the home page
      navigate("/home");
    } else {
      // Show an error message or perform other actions for invalid credentials
      setShowAlert(true);
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleFormSubmit}>
        <div className="container">
          <label>User: </label>
          <input
            type="text"
            value={form.email}
            name="email"
            onChange={handleInputChange}
          />
        </div>
        <div className="container">
          <label>Password: </label>
          <input
            type="password"
            value={form.password}
            name="password"
            onChange={handleInputChange}
          />
        </div>
        {showAlert && <p>Wrong credentials! Try again...</p>}
        <button type="submit">Login</button>
      </form>
    </div>
  );
};