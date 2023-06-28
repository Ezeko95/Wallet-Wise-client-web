import lock from "../../assets/pngkit_padlock-icon-png_3331142.png";
import { useGoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
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

  const login = useGoogleLogin({
    onSuccess: (codeResponse) => console.log(codeResponse),
    flow: "auth-code",
  });

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
    <>
      <div className="secret-code">
        <h1>"I solemnly swear that I am up to no good."</h1>
      </div>

      <div className="login-container">
        <div className="lock">
          <img src={lock} alt="lock" height="70px"></img>
        </div>
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
            <button onClick={() => login()}>Sign in with Google 🚀 </button>;
          </div>
          {showAlert && <p>Wrong credentials! Try again...</p>}
          <button type="submit">Login</button>
        </form>
      </div>
    </>
  );
};
