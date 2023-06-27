import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import {store} from "./redux/store/index.ts";
import axios from "axios";

// axios.defaults.baseURL = 'http://localhost:3001/'
axios.defaults.baseURL = 'https://wallet-wise.onrender.com/'

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
