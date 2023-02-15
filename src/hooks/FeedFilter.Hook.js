import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const useFeedFilter = (cars) => {
  const [Filterdcars, changeFilterCars] = useState(cars);

// console.log( Filterdcars);
// console.log( cars);

  const [params] = useSearchParams();
  const queryfromurlPrice = params.get("Price") || 20;
  const queryfromurlStation = params.get("station") || "";
  const queryfromurlMini = params.get("mini") || false;
  const queryfromurlStandard = params.get("standard") || false;
  const queryfromurlCompact = params.get("compact") || false;
  const queryfromurlEconomy = params.get("economy") || false;
  const queryfromurlVan = params.get("van") || false;
  const queryfromurlPickup = params.get("pickup") || false;
  const queryfromurl2to5passengers = params.get("2to5passengers") || false;
  const queryfromurl6ormorepassengers =
    params.get("6ormorepassengers") || false;

  useEffect(() => {
    //console.log( Filterdcars);
    // console.log(queryfromurlStation+"   lola1:::" + Filterdcars.length);
    const filterdcars = cars.filter((car) => {
      let ismatching = false;
      //console.log(car.id,car.available);

      ismatching =
        car.price >= queryfromurlPrice &&
        car.station == queryfromurlStation &&
        car.available == true &&
        (queryfromurlMini ? car.carType == "Mini" : car.carType) &&
        (queryfromurlStandard ? car.carType == "Standrad" : car.carType) &&
        (queryfromurlCompact ? car.carType == "Compact" : car.carType) &&
        (queryfromurlEconomy ? car.carType == "Economy" : car.carType) &&
        (queryfromurlVan ? car.carType == "Van" : car.carType) &&
        (queryfromurlPickup ? car.carType == "Pickup" : car.carType) &&
        (queryfromurl2to5passengers
          ? 2 <= car.capacity && car.capacity <= 5
          : car.capacity) &&
        (queryfromurl6ormorepassengers ? 6 <= car.capacity : car.capacity);
      return ismatching;
    });
    changeFilterCars(filterdcars);
    // console.log("lola" + Filterdcars.length);
   
  }, [
    cars.available,
    queryfromurlPrice,
    queryfromurlStation,
    queryfromurlMini,
    queryfromurlStandard,
    queryfromurlCompact,
    queryfromurlEconomy,
    queryfromurlVan,
    queryfromurlPickup,
    queryfromurl2to5passengers,
    queryfromurl6ormorepassengers,
  ]);
  return [Filterdcars, changeFilterCars];
};

export default useFeedFilter ;
