import React, { useState } from "react";
import { User_List } from "../assets/data/temp_data";
export const UserContext = React.createContext({}); // 1

const getLoggedInUser = () => {
  const localUser = JSON.parse(localStorage.getItem("Theuser"));
  return localUser || null;
};

const UserProvider = (props) => {
  const [user, setUser] = useState(getLoggedInUser());
  const [Users, setUsers] = useState(getLoggedInUser());

  const handleUserLogin = (loggedInUser) => {
    setUser(loggedInUser);
    localStorage.setItem("Theuser", JSON.stringify(loggedInUser));
  };
  // ----------------------------------

  const fetchUsers = () => {
    const UsersFromStorage = JSON.parse(localStorage.Users || "[]");
    if (UsersFromStorage.length === 0) {
      localStorage.Users = JSON.stringify(User_List);
      setUsers(User_List);
    } else {
      setUsers(UsersFromStorage);
    }
  };

  // --------------------
  const handleLogout = () => {
    localStorage.removeItem("Theuser");
    setUser(null);
  };

  return (
    <UserContext.Provider
      value={{ user, setUser, handleUserLogin, handleLogout, fetchUsers }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default UserProvider;
