import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import axios from 'axios';

//////////local
// axios.defaults.baseURL = 'http://localhost:3001';
/////////deploy
axios.defaults.baseURL = 'https://wisewalletfinal.onrender.com';

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
);
