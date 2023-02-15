import React from "react";
import CarCard from "../carCard/carCard.componant";
import "./carList.css";

const CarList = (props) => {
  return (
    <div className="col">
      <div className="resultnum">{props.cars.length} results</div>
      <div className="carlistbody">
        {props.cars.map((car, index) => (
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

export default CarList;
