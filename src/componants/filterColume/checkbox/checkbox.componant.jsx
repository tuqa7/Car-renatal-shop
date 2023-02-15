import React from "react";
import { useSearchParams } from "react-router-dom";
import "../filterColumn.css";

const Checkbox = (props) => {
    const [params, changeparams] = useSearchParams();

    const handleParmasCars = (e,name) => {
        const new_par = new URLSearchParams(params);
        if (e.target.checked) {
          console.log( e.target.checked);
          new_par.set(`${name}`, e.target.checked);
        } else {
          new_par.delete(`${name}`);
        }
    
        changeparams(new_par);
      };
  return (
    <div className="lola">
      <input
        type={"checkbox"}
        checked={params.get(`${props.parmasName}`) || false}
        onChange={(e) => handleParmasCars(e, `${props.parmasName}`)}
      />
      <label>{props.LabelTxt}</label>
      <span>{props.Carlength}</span>
    </div>
  );
};

export default Checkbox;
