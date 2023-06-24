import { Routes, Route } from "react-router-dom";
import Home from "./views/Home/Home";
import Landing from "./views/Landing/Landing";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Landing />} />

        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;
