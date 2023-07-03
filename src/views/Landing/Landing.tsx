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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const login = useGoogleLogin({
    onSuccess: () => {
      navigate("/home");
    },
    flow: "auth-code",
  });

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.post("/admin/login", {
        name: form.name,
        password: form.password
      });
      console.log(response.data)
      if (response.status === 500) {
        setShowAlert(true)
      } else {
        navigate("/home");
        const accesToken = response.data.accessToken;
        setCookie("accessToken", accesToken)
      }
    } catch (error) {
      console.error(error);
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
          <button type="submit">Login</button>
        </form>
        <button onClick={() => login()}>Sign in with Google 🚀</button>
      </div>
    </>
  );
};
