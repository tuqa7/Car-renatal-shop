import React from "react";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
// import { User_List } from '../../data/temp_data' ;
import "./sign_up.css";
import "../login/login.css";
import { User_List } from "../../assets/data/temp_data";

import { UserContext } from "../../providers/UserProvider.component";

const SignUpPage = () => {
  const navigate = useNavigate();
  const { user, setUser,fetchUsers } = useContext(UserContext);

  const handleSignUp = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const gender = e.target.gender.value;

    const user_exist = User_List.find((user) => user.email === email);
    if (user_exist) {
      alert("There is already Account for this Email");
    } else {
      const newUser = {
        id: Date.now(),
        full_name: name,
        email: email,
        password: password,
        rule: "user",
        gender: gender,
      };

      const usersFromStorage = JSON.parse(localStorage.Users || "[]");
      const newusers = [newUser, ...usersFromStorage];
      localStorage.Users = JSON.stringify(newusers);
      

      alert("added new user successfully!");
      navigate("/login");

      //setUser(newUser);
      //localStorage.setItem("The-user", JSON.stringify(newUser));
      // navigate("/feed", { replace: true });
    }
  };

  const goToLogin = () => {
    navigate("/login", { replace: true });
  };

  return (
    <div className="signUp-body">
      <div className="signup-container" id="signup-container">
        <div className="signup-form-container signup-signin-container">
          <form onSubmit={handleSignUp}>
            <h1>Create Account</h1>
            <br />
            <br />
            <input type="text" name="name" placeholder="Name" />
            <input type="email" name="email" placeholder="Email" />
            <input type="password" name="password" placeholder="Password" />
            <div className="input-radio">
              <input
                style={{ width: "auto" }}
                type="radio"
                id="Male"
                name="gender"
                value="Male"
              />
              <label htmlFor="Male"> Male </label>
              <input
                style={{ width: "auto" }}
                type="radio"
                id="Female"
                name="gender"
                value="Not Female"
              />
              <label htmlFor="Female"> Female </label>
            </div>
            <br />
            <button type="submit">Sign Up</button>
          </form>
        </div>

        <div className="signup-overlay-container">
          <div className="signup-overlay">
            <div className="overlay-panel overlay-right">
              <h1>Welcome Back!</h1>
              <p>
                To keep connected with us please login with your personal info
              </p>
              <button onClick={goToLogin} className="ghost" id="signIn">
                Sign In
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
