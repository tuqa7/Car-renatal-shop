import "./searchBar.css";
import React, { useContext, useState } from "react";
import { ArrowFatLineRight, Calendar, Clock } from "phosphor-react";
import { useSearchParams } from "react-router-dom";
import DatePicker from "react-datepicker";
import TimePicker from "react-time-picker";
import "react-datepicker/dist/react-datepicker.css";
import { SearchInfoContext } from "../../providers/searchInfo.componant";

const SearchBar = () => {
  const [params, changeparams] = useSearchParams();
  const [station, changeStation] = useState(0);
  const {
    selectedDropOffTime,
    changeSelectedDropOffTime,
    selectedPickUpTime,
    changeSelectedPickUpTime,
    selectedDropOffDate,
    changeSelectedDropOffDate,
    selectedPickUpDate,
    changeSelectedPickUpDate,
  } = useContext(SearchInfoContext);

  // const [selectedPickUpDate, changeSelectedPickUpDate] = useState(null);
  // const [selectedDropOffDate, changeSelectedDropOffDate] = useState(null);

  // const [selectedPickUpTime, changeSelectedPickUpTime] = useState(null);
  // const [selectedDropOffTime, changeSelectedDropOffTime] = useState(null);

  const handleParmaStation = () => {
    const new_par = new URLSearchParams(params);
    if (station) {
      new_par.set("station", station);
    } else if (station === "") {
      new_par.delete("station");
    }

    changeparams(new_par);
  };

  const handleParmaDatePickUp = (e) => {
    const new_par = new URLSearchParams(params);
    if (e.currentTarget.value) {
      new_par.set("DatePickUp", e.currentTarget.value);
    } else if (e.currentTarget.value === "") {
      new_par.delete("DatePickUp");
    }

    changeparams(new_par);
  };

  return (
    <div className="search">
      <ArrowFatLineRight size={33} color="#ff4714" weight="fill" />

      <div className="cloud">
        <div className="colsearchbar">
          <div className="label">Leaving from</div>
          <select
            name="stationSelection"
            placeholder="FromPlace"
            value={station ||""}
            onChange={(event) => {
              changeStation(event.currentTarget.value);
            }}
          >
            <option value="" disabled>
              Select
            </option>
            <option value="1">Station 1</option>
            <option value="2">Station 2</option>
            <option value="3">Station 3</option>
            <option value="4">Station 4</option>
          </select>
        </div>
        {/* {console.log("lola " + station)} */}
      </div>
      <div className="cloud">
        <Calendar size={33} color="grey" weight="duotone" />
        <div className="colsearchbar">
          <div className="label">Pick-up Date</div>
          <DatePicker
            className="date"
            placeholderText="Enter Date"
            selected={selectedPickUpDate}
            onChange={(date) => {
              changeSelectedPickUpDate(date);
            }}
            dateFormat="dd MMM"
            minDate={new Date()}
            isClearable
            required
          />
        </div>
        {/* {console.log(selectedPickUpDate)} */}
      </div>
      <div className="cloud">
        <Calendar size={33} color="grey" weight="duotone" />
        <div className="colsearchbar">
          <div className="label">Drop-Off Date</div>
          <DatePicker
            className="date"
            placeholderText="Enter Date"
            selected={selectedDropOffDate}
            onChange={(date) => {
              changeSelectedDropOffDate(date);
            }}
            dateFormat="dd MMM"
            minDate={selectedPickUpDate}
            isClearable
          />
        </div>
        {/* {console.log(selectedDropOffDate)} */}
      </div>
      <div className="cloud">
        <Clock size={33} color="grey" weight="duotone" />
        <div className="colsearchbar">
          <div className="label">Pick-Up Time</div>
          <TimePicker
            className="timepicker"
            value={selectedPickUpTime}
            onChange={(time) => {
              changeSelectedPickUpTime(time);
            }}
            // clearIcon
            disableClock
          />
        </div>
        {/* {console.log(selectedPickUpTime)} */}
      </div>
      <div className="cloud">
        <Clock size={33} color="grey" weight="duotone" />
        <div className="colsearchbar">
          <div className="label">Drop-Off Time</div>
          <TimePicker
            className="timepicker"
            value={selectedDropOffTime}
            onChange={(time) => {
              changeSelectedDropOffTime(time);
            }}
            // clearIcon
            disableClock
          />
        </div>
        {/* {console.log(selectedDropOffTime)} */}
      </div>
      <button
        onClick={() => {
          if (
            selectedPickUpDate != null &&
            selectedDropOffDate != null &&
            selectedPickUpTime != null &&
            selectedDropOffTime != null
          ) {
            handleParmaStation();
          } else {
            alert("all the data required !");
          }
        }}
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
