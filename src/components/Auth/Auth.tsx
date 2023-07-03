import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getCookie } from "typescript-cookie";
const useAuth = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const accessToken = getCookie("accessToken");

    if (!accessToken) {
      // User is not authenticated, redirect to login page
      navigate("/");
    }
  }, [navigate]);

  return null;
};

export default useAuth;
