import React, { useContext, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import CarCard from "../../componants/carCard/carCard.componant";
import Header from "../../componants/Header/Header";
import { UserContext } from "../../providers/UserProvider.component";
import "./user-cars.css";

const UserCars = (props) => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const { user, fetchUsers } = useContext(UserContext);

  useEffect(() => {
    if (user === null) {
      navigate("/login");
    }
  }, [user]);

  return (
    <div className="usercarsbody">
      <Header/>
      {/* user-cars{console.log(state)} */}
      <div className="usercarsList">
        {state.usercars.map((car, index) => (
          <CarCard
            key={car.id}
            carData={car}
            index={index}
            onAddCar={props.onAddCar}
          />
        ))}
      </div>
    </div>
  );
};

export default UserCars;
