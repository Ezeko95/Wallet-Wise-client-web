import LoginButton from "./components/Login/Login";
import LogoutButton from "./components/Logout/Logout";
import Profile from "./components/ProfileUser/ProfileUser";

const App = () => {
  return (
    <div>
      <LoginButton />
      <LogoutButton />
      <Profile/>
    </div>
  );
};

export default App;
