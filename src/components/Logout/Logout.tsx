import React from "react";
import { useNavigate } from "react-router-dom";

export const Logout: React.FC = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Perform logout logic here (e.g., clearing session, removing tokens, etc.)
    // ...

    // Redirect to the landing page or any other desired location
    navigate("/");
  };

  return (
    <button onClick={handleLogout}>Logout</button>
  );
};