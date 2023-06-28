import { Routes, Route } from "react-router-dom";
import Home from "./views/Home/Home";
import { Landing } from "./views/Landing/Landing";
import Detail from "./views/Detail/detail";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Landing />} />

        <Route path="/home" element={<Home />} />

        <Route path="/detail/:id" element={<Detail/>} />

        <Route path="/subscription" />
        
      </Routes>
    </div>
  );
};

export default App;
