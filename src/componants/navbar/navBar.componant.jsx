import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./navBar.css";

const NavBar = (props) => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="navBarbody">
        <div className="navBarbutton">
          <Link to="/feed" title="Home" style={{ textDecoration: "none" }}>
            <div className="labelnavbar">Home</div>
          </Link>
        </div>
        {props.usercars ? (
          <div className="navBarbutton">
            <div className="labelnavbar"
              onClick=
              {(e) => {
                const usercars = props.usercars;
                console.log(props.usercars);
                navigate("/usercars", {
                  state: {
                    //...values
                    usercars,
                  },
                });
                // <Link  to="/usercars" title="user cars"></Link>
              }}>
              Cars
            </div>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
