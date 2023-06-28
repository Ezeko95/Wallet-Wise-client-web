import { Routes, Route } from "react-router-dom";
import { Landing, Home, Detail, Subscription } from "./views";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Landing />} />

        <Route path="/home" element={<Home />} />

        <Route path="/detail/:id" element={<Detail />} />

        <Route path="/subscription" element={<Subscription />} />
      </Routes>
    </div>
  );
};

export default App;
