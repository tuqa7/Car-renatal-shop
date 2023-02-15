import React, { useContext } from "react";
import "./Header.css";
import carlogo from "../../assets/images/CarLogo.png";
import userImg from "../../assets/images/user.png";
import { Link, useNavigate } from "react-router-dom";
import { Car, PlusCircle } from "phosphor-react";
import { UserContext } from "../../providers/UserProvider.component";
import NavBar from "../navbar/navBar.componant";

const Header = () => {
  const { user, handleLogout } = useContext(UserContext);
  const navigate = useNavigate();

  return (
    <div className="header">
      <div className="headerrow">
        {" "}
        <Link to="/feed" title="Home">
          {/* <img
            src={carlogo}
            width="200px"
            height="70px"
            alt="Car Rental shop"
          /> */}
          <Car width={150} size={50} color="#ff4714" weight="duotone" />
        </Link>
        <NavBar usercars={user?.cars} />
      </div>

      {/* <div className="headertext">{props.title}</div> */}

      {/* {
            user!==null
            ?<div> 
              <img src={userImg} alt="user avatar" height={40} />
              {user.full_name}
              </div>
            :<div></div>
           }  */}

      <div>
        {user !== null ? (
          <div className="action_buttons">
            {user?.email === "admin@gmail.com" ? (
              <Link to="/add" title="add a Car">
                <button className="addbutton">
                  {/* <div className="row">
                <span>Add Car</span> */}
                  <PlusCircle size={28} color="#ff4714" weight="duotone" />
                  {/* </div> */}
                </button>
              </Link>
            ) : (
              <div></div>
            )}
            {/* <img src={userImg} alt="user avatar" height={50} /> */}
            <div className="colHeader">
              <span className="name">{user.full_name}</span>
            </div>
            <button className="login button-81" onClick={handleLogout}>
              Log out
            </button>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
};

export default Header;
