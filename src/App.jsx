import React, { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import FeedPage from "./pages/feed/feed.page";
//import Header from './components/header/header.component';
import NotFound from "./pages/not-found/not-found.page";
import AddCar from "./pages/add-car/add-car.page";
import Login from "./pages/login/login.page";
import SignUpPage from "./pages/sign_up/sign_up.page";
import { Car_List } from "./assets/data/temp_data";
import UserProvider from "./providers/UserProvider.component";
import UserCars from "./pages/user-cars/user-cars";
import { fetchcars } from "./services/cars";
// export const UserContext = React.createContext({})

function App() {
  const [Cars, setCars] = useState([]);
  // const [user, setUser] = useState(getLoggedInUser());

  useEffect(() => {
    fetchCars();
    // fetchcarhttp();
  }, []);
  // useEffect(() => fetchUsers(), []);

  // const fetchCars = () => {
  //   const CarsFromStorage = JSON.parse(localStorage.Cars || "[]");
  //   if (CarsFromStorage.length === 0) {
  //     localStorage.Cars = JSON.stringify(Car_List);
  //     setCars(Car_List);
  //   } else {
  //     setCars(CarsFromStorage);
  //   }
  // };


  const fetchCars = () => {
    const CarsFromStorage = JSON.parse(localStorage.Cars || "[]");
    if (CarsFromStorage.length === 0) {
      fetchcars()
      .then((reselt) => {
        localStorage.Cars = JSON.stringify(reselt);
        setCars(reselt);
      })
      .catch((err) => {
        console.log(err);
        console.log("lola");
      });
    } else {
      setCars(CarsFromStorage);
    }
  };

  const fetchcarhttp = () => {
    fetchcars()
    .then((reselt) => {
      console.log(reselt);
    })
    .catch((err) => {
      console.log(err);
    });
  };

  // const fetchUsers = () => {
  //   const UsersFromStorage = JSON.parse(localStorage.Users || "[]");
  //   if (UsersFromStorage.length === 0) {
  //     localStorage.Users = JSON.stringify(User_List);
  //     setCars(User_List);
  //   } else {
  //     setCars(UsersFromStorage);
  //   }
  // };

  return (
    <div className="App">
      <UserProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Navigate to="/feed" />} />
            <Route
              path="feed"
              element={
                <FeedPage cars={Cars} setCars={setCars} onAddCar={fetchCars} />
              }
            />
            <Route path="add" element={<AddCar onAddCar={fetchCars} />} />
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<SignUpPage />} />
            <Route path="usercars" element={<UserCars />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </UserProvider>
    </div>
  );
}

export default App;
