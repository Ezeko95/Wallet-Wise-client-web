import React, { useState, useEffect } from "react";
import "./WakeUpNeo.css";

const WakeUpNeo: React.FC<{ text: string }> = ({ text }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 5000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className={`fade-out-text ${isVisible ? "visible" : "hidden"}`}>
      {text}
    </div>
  );
};

export default WakeUpNeo;