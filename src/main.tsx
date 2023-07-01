import { GoogleOAuthProvider } from "@react-oauth/google";
import { BrowserRouter } from "react-router-dom";
import {store} from "./redux/store/index.ts";
import { Provider } from "react-redux";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import axios from "axios";

// axios.defaults.baseURL = 'http://localhost:3001/'
axios.defaults.baseURL = 'https://wallet-wise.onrender.com/'

const clientId = "988115114562-fl3kcesngj8rr7f9iekttr55mjdsndfe.apps.googleusercontent.com"

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <GoogleOAuthProvider clientId={clientId}>
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
  </GoogleOAuthProvider>
);
