import { GoogleLogin } from "@react-oauth/google";
import { useState } from "react";
export const Landing = () => {
    const [form, setForm] = useState({
        email: "",
        password: "",
    })
    const handlerChange = () => {}
  return (
    <div>
      <form>
        <div>
          <label>email: </label>
          <input 
          type="text"
          value={form.email}
          name="email"
          onChange={handlerChange}
          />
        </div>
        <div>
            <label>password: </label>
            <input 
          type="text"
          value={form.password}
          name="password"
          onChange={handlerChange}
          />
        </div>
      </form>
      <GoogleLogin
        onSuccess={(credentialResponse) => {
          console.log(credentialResponse);
        }}
        onError={() => {
          console.log("Login Failed");
        }}
      />
      ;
    </div>
  );
};

export default Landing;
