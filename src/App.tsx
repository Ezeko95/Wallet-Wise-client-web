import { Routes, Route, Navigate } from "react-router-dom";
import { Landing, Home, Detail, Analytics } from "./views";
import useAuth from "./components/Auth/Auth";

const App = () => {
  useAuth();
  return (
    <div>
      <Routes>
        <Route path="/" element={<Landing />} />

        <Route path="/home" element={<Home />} />

        <Route path="/detail/:id" element={<Detail />} />

        <Route path="/analytics" element={<Analytics />} />

        <Route path="*" element={<Navigate to="/" />} />
        
      </Routes>
    </div>
  );
};

export default App;
