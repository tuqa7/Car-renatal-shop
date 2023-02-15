import React, { useEffect, useContext ,useState } from "react";
import "./login.css";
import { useNavigate } from "react-router-dom";
import { User_List } from "../../assets/data/temp_data";
//import { TEMP_USERS } from '../../data/temp_data';
import { UserContext } from "../../providers/UserProvider.component";

const Login = () => {
  // const The_User = useContext(UserContext);
  const { handleUserLogin, user } = useContext(UserContext);

  const navigate = useNavigate();
  useEffect(() => {
    if (user !== null) {
      // alert("its done")
      navigate("/feed");
    }
  }, [user]);

  const [theuserFromLocalStorage, changetheuserFromLocalStorage] = useState(
    JSON.parse(localStorage.Users || "[]")
  );

  const handleLogin = (e) => {
    e.preventDefault();
    console.log(theuserFromLocalStorage);
    const email = e.target.email.value;
    const password = e.target.password.value;
    const user = theuserFromLocalStorage.find(
      (user) => user.email === email && user.password === password
    );
    if (user) {
      handleUserLogin(user);
      navigate("/feed", { replace: true });
    } else {
      alert("Wrong email or password , please try again !");
    }
  };

  const goToSignup = () => {
    navigate("/signup", { replace: true });
  };

  return (
    <div className="loginPage-body">
      <div className="login-container" id="login-container">
        <div className="login-form-container login-signup-container">
          <form onSubmit={handleLogin}>
            <h1>Sign in</h1>
            <br />
            <br />
            <input type="email" name="email" placeholder="Email" />
            <input type="password" name="password" placeholder="Password" />
            <br />
            <br />
            <button type="submit">Sign In</button>
          </form>
        </div>
        <div className="login-overlay-container">
          <div className="login-overlay">
            <div className="overlay-panel overlay-right">
              <h1>Hello, Friend!</h1>
              <p>Enter your personal details and start journey with us</p>
              <button onClick={goToSignup} className="ghost" id="signUp">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
