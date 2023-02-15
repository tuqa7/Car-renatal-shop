import "./feed.css";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import Header from "../../componants/Header/Header";
import SearchBar from "../../componants/searchBar/searchBar.componant";
import FilterColumn from "../../componants/filterColume/filterColumn.componant";
import CarList from "../../componants/carList/carList.componant";
import { UserContext } from "../../providers/UserProvider.component";
import SearchProvider from "../../providers/searchInfo.componant";
import useFeedFilter from "../../hooks/FeedFilter.Hook";

const FeedPage = (props) => {
  const [Filterdcars, changeFilterCars] = useFeedFilter(props.cars);

  const navigate = useNavigate();
  const { user, fetchUsers } = useContext(UserContext);

  useEffect(() => {
    if (user === null) {
      navigate("/login");
    }
  }, [user]);

  useEffect(() => {
    fetchUsers();
    
  }, []);

  useEffect(()=>{
    props.onAddCar();
  },[Filterdcars]);

  return (
    <div>
      <SearchProvider>
        <Header title={"name car rental"} />
        {/* <hr/> */}
        <SearchBar />
        <div className="feedbody">
          <FilterColumn cars={Filterdcars} setCars={changeFilterCars} />
          <CarList
            cars={Filterdcars}
            setCars={changeFilterCars}
            onAddCar={props.onAddCar}
          />
        </div>
      </SearchProvider>
    </div>
  );
};

export default FeedPage;
