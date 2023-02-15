import React, { useState } from "react";


export const SearchInfoContext = React.createContext({});

const SearchProvider = (props) => {
  const [selectedPickUpDate, changeSelectedPickUpDate] = useState(null);
  const [selectedDropOffDate, changeSelectedDropOffDate] = useState(null);

  const [selectedPickUpTime, changeSelectedPickUpTime] = useState(null);
  const [selectedDropOffTime, changeSelectedDropOffTime] = useState(null);

  return (
    <SearchInfoContext.Provider
      value={{
        selectedDropOffTime,
        changeSelectedDropOffTime,
        selectedPickUpTime,
        changeSelectedPickUpTime,
        selectedDropOffDate,
        changeSelectedDropOffDate,
        selectedPickUpDate,
        changeSelectedPickUpDate,
      }}
    >
      {props.children}
    </SearchInfoContext.Provider>
  );
};

export default SearchProvider;
