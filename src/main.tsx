import { GoogleOAuthProvider } from "@react-oauth/google";
import { BrowserRouter } from "react-router-dom";
import { store } from "./redux/store/index.ts";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App.tsx";
import axios from "axios";
import "./index.css";

// axios.defaults.baseURL = "http://localhost:3001/";
axios.defaults.baseURL = "https://wallet-wise.onrender.com/";

const clientId =
  "988115114562-fl3kcesngj8rr7f9iekttr55mjdsndfe.apps.googleusercontent.com";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <GoogleOAuthProvider clientId={clientId}>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </GoogleOAuthProvider>
);
