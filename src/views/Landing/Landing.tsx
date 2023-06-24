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
    setForm({ ...form, [e.target.name]: e.target.value });
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
    <div>
      <form onSubmit={handleFormSubmit}>
        <div>
          <label>Email: </label>
          <input
            type="text"
            value={form.email}
            name="email"
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Password: </label>
          <input
            type="password"
            value={form.password}
            name="password"
            onChange={handleInputChange}
          />
        </div>
        <button type="submit">Login</button>
      </form>
      {showAlert && <p>Incorrect credentials. Please try again.</p>}
    </div>
  );
};