import React, { useState } from "react";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import "./filterColumn.css";
import { Car_List } from "../../assets/data/temp_data";
import useFilter from "../../hooks/FilterColumn.Hook";
import Checkbox from "./checkbox/checkbox.componant";
import useFilterColumn from "../../hooks/FilterColumn.Hook";

const FilterColumn = (props) => {
  // const [slider, changeslider] = useState(20);
  // const Cars = props?.carData;
  // const [Cars]=useState(props.cars);

  const [params, changeparams] = useSearchParams();

  const handleParmasPrice = (e) => {
    const new_par = new URLSearchParams(params);
    if (e.currentTarget.value) {
      new_par.set("Price", e.currentTarget.value);
    } else {
      new_par.delete("Price");
    }

    changeparams(new_par);
  };

  const [
    Mini,
    Standard,
    Compact,
    Economy,
    Van,
    Pickup,
    PassengersLowLength,
    PassengersHighLength,
  ] = useFilterColumn(props.cars);

  return (
    <div className="FilterColumn">
      <div className="filterlabel">Filter by</div>
      <div className="cartypelabel">Car Type</div>
      <form className="filterform" action="#" onSubmit={null}>
        <Checkbox parmasName={"mini"} LabelTxt={"Mini"} Carlength={Mini} />
        <Checkbox
          parmasName={"standard"}
          LabelTxt={"Standard"}
          Carlength={Standard}
        />
        <Checkbox
          parmasName={"compact"}
          LabelTxt={"Compact"}
          Carlength={Compact}
        />
        <Checkbox
          parmasName={"economy"}
          LabelTxt={"Economy"}
          Carlength={Economy}
        />
        <Checkbox parmasName={"van"} LabelTxt={"Van"} Carlength={Van} />
        <Checkbox
          parmasName={"pickup"}
          LabelTxt={"Pickup"}
          Carlength={Pickup}
        />

        <hr />
        <div className="cartypelabel">Capacity</div>
        <Checkbox
          parmasName={"2to5passengers"}
          LabelTxt={"2-5 passengers"}
          Carlength={PassengersLowLength}
        />
        <Checkbox
          parmasName={"6ormorepassengers"}
          LabelTxt={"6 or more passengers"}
          Carlength={PassengersHighLength}
        />

        <hr />
        <div className="cartypelabel">Daily price</div>
        <input
          className="range"
          type={"range"}
          min="20"
          max="220"
          id="sliderid"
          step={10}
          value={params.get("Price") || 20}
          // list="data"
          onChange={handleParmasPrice}
        />

        <div>
          Max.{" "}
          <output name="result" htmlFor="sliderid">
            {params.get("Price") || 20} $
          </output>
        </div>
      </form>
    </div>
  );
};

export default FilterColumn;
