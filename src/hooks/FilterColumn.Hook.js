import { useEffect, useState } from "react";

const useFilterColumn = (cars) => {
  const [MiniCars, changeMiniCars] = useState([]);
  const [StandardCars, changeStandardCars] = useState([]);
  const [CompactCars, changeCompactCars] = useState([]);
  const [EconomyCars, changeEconomyCars] = useState([]);
  const [VanCars, changeVanCars] = useState([]);
  const [PickupCars, changePickupCars] = useState([]);
  const [PassengersLow, changepassengersLow] = useState([]);
  const [PassengersHigh, changepassengersHigh] = useState([]);

  //const {filterdcars} =useFilter(MiniCars,changeMiniCars,MiniCarschecked, props.setCars);
  useEffect(() => {
    var minicars = [];
    var standardcars = [];
    var compactcars = [];
    var economycars = [];
    var vancars = [];
    var pickupcars = [];
    var passengersLow = [];
    var passengershigh = [];
    // console.log("lola");
    cars.filter((car) => {
      if (car.carType === "Mini") {
        minicars = [...minicars, car];
      }

      if (car.carType === "Standrad") {
        standardcars = [...standardcars, car];
      }
      if (car.carType === "Compact") {
        compactcars = [...compactcars, car];
      }
      if (car.carType === "Economy") {
        economycars = [...economycars, car];
      }
      if (car.carType === "Van") {
        vancars = [...vancars, car];
      }
      if (car.carType === "Pickup") {
        pickupcars = [...pickupcars, car];
      }

      if (2 <= car.capacity && car.capacity <= 5) {
        passengersLow = [...passengersLow, car];
      }

      if (car.capacity >= 6) {
        passengershigh = [...passengershigh, car];
      }

      //  console.log(minicars);
    });
    changeMiniCars(minicars);
    changeStandardCars(standardcars);
    changeCompactCars(compactcars);
    changeEconomyCars(economycars);
    changeVanCars(vancars);
    changePickupCars(pickupcars);
    changepassengersLow(passengersLow);
    changepassengersHigh(passengershigh);
  }, [cars]);
  var Mini,
    Standard,
    Compact,
    Economy,
    Van,
    Pickup,
    PassengersLowLength,
    PassengersHighLength;
  return [
    (Mini = MiniCars.length),
    (Standard = StandardCars.length),
    (Compact = CompactCars.length),
    (Economy = EconomyCars.length),
    (Van = VanCars.length),
    (Pickup = PickupCars.length),
    (PassengersLowLength = PassengersLow.length),
    (PassengersHighLength = PassengersHigh.length),
  ];
};

export default useFilterColumn;
