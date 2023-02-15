import React, { useContext } from "react";
import "./carCard.css";
import { UsersThree, GasPump, Gauge } from "phosphor-react";
//import carimg from "../../images/Tesla-Model-S.png";
import { UserContext } from "../../providers/UserProvider.component";
import { SearchInfoContext } from "../../providers/searchInfo.componant";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const CarCard = (props) => {
  const Car = props?.carData;
  const navigate = useNavigate();
  // const navigate2 = useNavigate();

  const {
    selectedDropOffTime,
    selectedPickUpTime,
    selectedDropOffDate,
    selectedPickUpDate,
  } = useContext(SearchInfoContext);

  const { user, setUser } = useContext(UserContext);

  const [theuserFromLocalStorage, changetheuserFromLocalStorage] = useState(
    JSON.parse(localStorage.Theuser || "[]")
  );

  const theOrder = (id) => {
    // Car.available = false;

    // const newCarorder = {
    //   ...props.carData,
    //   selectedDropOffTime,
    //   changeSelectedDropOffTime,
    //   selectedPickUpTime,
    //   changeSelectedPickUpTime,
    //   selectedDropOffDate,
    //   changeSelectedDropOffDate,
    //   selectedPickUpDate,
    //   changeSelectedPickUpDate,
    // };
    console.log(id);
    const carsFromLocalStorage = JSON.parse(localStorage.Cars || "[]");
    const chossenCar = carsFromLocalStorage.map((car) => {
      if (id === car.id) {
        return {
          ...car,
          available: false,
          selectedDropOffTime: selectedDropOffTime,
          selectedPickUpTime: selectedPickUpTime,
          selectedDropOffDate: selectedDropOffDate,
          selectedPickUpDate: selectedPickUpDate,
        };
      }

      return car;
    });

    var newcar;
    console.log(chossenCar);
    var TheUser;
    // const car111 =
    carsFromLocalStorage.filter((car) => {
      if (id === car.id) {
        const carsuser = user.cars || [];
        // console.log(car);
        // console.log(user);
        newcar = {
          ...car,
          available: false,
          selectedDropOffTime: selectedDropOffTime,
          selectedPickUpTime: selectedPickUpTime,
          selectedDropOffDate: selectedDropOffDate,
          selectedPickUpDate: selectedPickUpDate,
        };
        TheUser = { ...user, cars: [...carsuser, newcar] };
        setUser(TheUser);
        localStorage.setItem("Theuser", JSON.stringify(TheUser));
        // console.log(user);
      }
    });

    // console.log(car111);

    // const newcars = [newCarorder, ...carsFromStorage];
    // localStorage.Cars = JSON.stringify(newcars);
    // props.onAddCar();

    // const ordersFromStorage = JSON.parse(localStorage.ordersDate || "[]");
    // const neworders = [newCarorder, ...ordersFromStorage];

    const usersFromLocalStorage = JSON.parse(localStorage.Users || "[]");
    console.log(JSON.parse(localStorage.Theuser || "[]"));
    console.log(theuserFromLocalStorage.id);
    const chossenusers = usersFromLocalStorage.map((userloop) => {
      const carsuser = user.cars || [];
      //console.log(carsuser);
      if (theuserFromLocalStorage.id == userloop.id) {
        return {
          ...userloop,
          cars: [...carsuser, newcar],
        };
      }

      return userloop;
    });

    localStorage.Cars = JSON.stringify(chossenCar);
    localStorage.Users = JSON.stringify(chossenusers);
    alert("Your car is rented!");
    props.onAddCar();
    navigate(
      "/feed"
      //   // {
      //   //   state: {
      //   //     usercars: user.cars,
      //   //   },
      //   // }
    );
  };

  const DeliverytheCar = (id) => {
    const carsFromLocalStorage = JSON.parse(localStorage.Cars || "[]");
    const chossenCar = carsFromLocalStorage.map((car) => {
      if (id === car.id) {
        return {
          ...car,
          available: true,
          selectedDropOffTime: null,
          selectedPickUpTime: null,
          selectedDropOffDate: null,
          selectedPickUpDate: null,
        };
      }

      return car;
    });

    const newusercars = user.cars.filter((car) => id !== car.id);
    const TheUser = { ...user, cars: [...newusercars] };
    setUser(TheUser);
    localStorage.setItem("Theuser", JSON.stringify(TheUser));

    // console.log(JSON.parse(localStorage.Theuser || "[]"));
    // console.log(theuserFromLocalStorage.id);
    const usersFromLocalStorage = JSON.parse(localStorage.Users || "[]");
    const chossenusers = usersFromLocalStorage.map((userloop) => {
      //console.log(carsuser);
      if (theuserFromLocalStorage.id == userloop.id) {
        return {
          ...userloop,
          cars: [...newusercars],
        };
      }

      return userloop;
    });

    localStorage.Users = JSON.stringify(chossenusers);
    localStorage.Cars = JSON.stringify(chossenCar);
    alert("Your car is deliverd!");
    navigate("/feed");
  };

  return (
    <div className="carcardbody">
      <div className="imgdiv">
        <img src={Car.urlImg} width="80%" height="130px" alt="Car Picture" />
      </div>
      <div className="carinfo">
        <div className="cartype">{Car.carType}</div>
        <div className="carname">{Car.carName}</div>

        <div className="feature">
          <div className="featurelabel">Features</div>
          <div className="rowofcarcard">
            <div className="rowofcarcard2">
              <UsersThree size={20} color="#A09F9F" weight="duotone" />
              <div>&nbsp; {Car.capacity}</div>
            </div>

            <div className="rowofcarcard2">
              <GasPump size={20} color="#A09F9F" weight="duotone" />
              <div>
                
                &nbsp; {Car.electricOrNOt == "true" ? "Electric":"not Electric" }
              </div>
            </div>
          </div>
          <div className="rowofcarcard2">
            <Gauge size={20} color="#A09F9F" weight="duotone" />
            <div>
              &nbsp;{" "}
              {Car.unlimitedMileage == "true" ?  "limited mileage":"Unlimited mileage" }
            </div>
          </div>
        </div>
      </div>
      <div className="rantBar">
        <div className="colcarCard">
          <div className="price">{Number(Car.price).toFixed(2)} $</div>
          <div className="featurelabel">by day</div>
          {Car.available == false ? (
            <button
              onClick={(e) => {
                DeliverytheCar(Car.id);
              }}
            >
              Delivery
            </button>
          ) : (
            <div></div>
          )}
        </div>
        {Car.available == true ? (
          <button
            onClick={(e) => {
              theOrder(Car.id);
            }}
          >
            Reserve deal
          </button>
        ) : (
          <div>
            <div>
              PickUpDate : {Car.selectedPickUpDate.toString().slice(0, 10)}{" "}
            </div>
            <div>PickUpTime : {Car.selectedPickUpTime} </div>
            <div>
              DropOffDate : {Car.selectedDropOffDate.toString().slice(0, 10)}{" "}
            </div>
            <div>DropOffTime : {Car.selectedDropOffTime} </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CarCard;
