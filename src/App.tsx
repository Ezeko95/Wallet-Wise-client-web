import { Routes, Route } from "react-router-dom";
import { Landing, Home, Detail } from "./views";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Landing />} />

        <Route path="/home" element={<Home />} />

        <Route path="/detail/:id" element={<Detail />} />

      </Routes>
    </div>
  );
};

export default App;
