import "./add-car.css";
import Header from "../../componants/Header/Header";
import { CarType, CarName, Station } from "../../assets/data/temp_data";
import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../providers/UserProvider.component";
import { ArrowFatLeft } from "phosphor-react";

const AddCar = (props) => {
  const navigate = useNavigate();

  const [station, changeStation] = useState("");
  const [carType, changeCarType] = useState("");
  const [carName, changeCarName] = useState("");

  // const The_User = useContext(UserContext);
  const { user } = useContext(UserContext);

  useEffect(() => {
    if (user === null) {
      navigate("/login");
    } else if (user.email !== "admin@gmail.com" && user.role !== "admin") {
      // alert("this user don't have a permission to add car");
      navigate("/feed");
    }
  }, [user]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // const body = e.target.body.value;
    //const image = e.target.imgURL.value;

    const station = e.target.station.value;
    const urlImg = e.target.urlImg.value;
    const electricOrNOt = e.target.electricOrNOt.value;
    const capacity = e.target.capacity.value;
    const carType = e.target.carType.value;
    const carName = e.target.carName.value;
    const price = e.target.price.value;
    const unlimitedMileage = e.target.unlimitedMileage.value;

    // alert(electricOrNOt);
    const newcar = {
      id: Date.now(),
      urlImg: urlImg,
      electricOrNOt: electricOrNOt,
      capacity: capacity,
      carType: carType,
      carName: carName,
      price: price,
      station: station,
      unlimitedMileage: unlimitedMileage,
      available: true,
    };

    const carsFromStorage = JSON.parse(localStorage.Cars || "[]");
    const newcars = [newcar, ...carsFromStorage];
    localStorage.Cars = JSON.stringify(newcars);
    props.onAddCar();
    alert("Your car was added successfully!");
    navigate("/feed");
  };

  return (
    <div className="addCar-body">
      <div className="addcar-container" id="addcar-container">
        <div className="addcar-form-container">
          <form onSubmit={handleSubmit}>
            <br />

            <div className="rowonaddcarRadio">
              <Link to="/feed" title="add a Car">
                <ArrowFatLeft size={35} color="#ff4714" weight="fill" />
              </Link>
              <h1>Add a new Car</h1>
            </div>

            <br />
            <br />

            <div>
              <label htmlFor="station" title="station">
                Station : {"   "}
              </label>
              <select
                className="Select"
                name="station"
                placeholder="station"
                value={station}
                onChange={(event) => changeStation(event.target.value)}
                required
              >
                <option value="" disabled>
                  Select
                </option>
                {Station.map((item, index) => (
                  <option key={index} value={item.value}>
                    {item.label}
                  </option>
                ))}
              </select>
            </div>
            <input
              type="string"
              name="urlImg"
              placeholder="Car Image URL"
              required
            />

            <input
              type="number"
              name="capacity"
              placeholder="Capacity"
              min={0}
              required
            />

            <input
              type="number"
              name="price"
              placeholder="Price"
              min={20}
              required
            />

            <div className="rowonaddcar">
              <div>
                <label htmlFor="carType" title="carType">
                  Type of Car : {"   "}
                </label>
                <select
                  className="Select"
                  name="carType"
                  placeholder="Type of Car"
                  value={carType}
                  onChange={(event) => changeCarType(event.target.value)}
                  required
                >
                  <option value="" disabled>
                    Select
                  </option>
                  {CarType.map((item, index) => (
                    <option key={index} value={item.value}>
                      {item.value}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="carName" title="carName">
                  Car Name : {"   "}
                </label>
                <select
                  className="Select"
                  name="carName"
                  placeholder="Car Name"
                  value={carName}
                  onChange={(event) => changeCarName(event.target.value)}
                  required
                >
                  <option value="" disabled>
                    Select
                  </option>
                  {CarName.map((item, index) => (
                    <option key={index} value={item.value}>
                      {item.value}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="input-radio rowonaddcarRadio">
              <div>
                <input
                  style={{ width: "auto" }}
                  type="radio"
                  id="electric"
                  name="electricOrNOt"
                  value="true"
                  required
                />
                <label htmlFor="electric"> Electrical </label>
              </div>
              <div>
                <input
                  style={{ width: "auto" }}
                  type="radio"
                  id="Not_Electric"
                  name="electricOrNOt"
                  value="false"
                  required
                />
                <label htmlFor="Not_Electric"> Not Electrical </label>
              </div>
            </div>

            <div className="input-radio rowonaddcarRadio">
              <div>
                <input
                  style={{ width: "auto" }}
                  type="radio"
                  id="limited"
                  name="unlimitedMileage"
                  value="true"
                  required
                  
                />
                <label htmlFor="limited"> Limited Mileage </label>
              </div>
              <div>
                <input
                  style={{ width: "auto" }}
                  type="radio"
                  id="unlimited"
                  name="unlimitedMileage"
                  value="false"
                  required
                />
                <label htmlFor="unlimited"> Unlimited Mileage </label>
              </div>
            </div>
            <br />
            <button type="submit">Add</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddCar;
