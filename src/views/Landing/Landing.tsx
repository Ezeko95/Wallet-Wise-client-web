import lock from "../../assets/pngkit_padlock-icon-png_3331142.png";
import { setCookie } from "typescript-cookie";
import { useGoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import axios from "axios";
import "./Landing.css";

export const Landing: React.FC = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    password: "",
  });
  const [showAlert, setShowAlert] = useState(false);
  console.log(showAlert);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const login = useGoogleLogin({
    onSuccess: () => {
      setCookie(
        "accessToken",
        "JzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IldhbGxldC1XaXNlLUFkbWluIiwiaWF0IjoxNTE2MjM5MDIyfQ.NNSJUFlZAWKIy3pE7gMcD66Oq6uqzVPj3AKCqW0fsUM"
      );
      navigate("/home");
    },
    flow: "auth-code",
  });

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.post("/admin/login", {
        name: form.name,
        password: form.password,
      });
      console.log(response);
      if (response.status === 200) {
        navigate("/home");
        const accessToken = response.data.accessToken;
        setCookie("accessToken", accessToken);
      } else {
        setShowAlert(true);
      }
    } catch (error) {
      console.error(error);
      setShowAlert(true);
    }
  };

  return (
    <div className="landing-container">
      <div className="secret-code">
        <h1>Wise Wallet Admin</h1>
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
              value={form.name}
              className="input-text"
              name="name"
              onChange={handleInputChange}
            />
          </div>
          <div className="container">
            <label>Password: </label>
            <input
              type="password"
              value={form.password}
              className="input-text"
              name="password"
              onChange={handleInputChange}
            />
          </div>
          {showAlert && <p>Wrong credentials! Try again...</p>}
        </form>
        <button type="submit">Login</button>
        <button onClick={() => login()}>Sign in with Google 🚀</button>
      </div>
    </div>
  );
};
