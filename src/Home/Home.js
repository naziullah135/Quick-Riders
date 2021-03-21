import React, { useState } from "react";
import "./Home.css";
import fakeData from '../fakeData/Data.json'
import VehicleDetails from "../VehicleDetails/VehicleDetails";

const Home = () => {
  const vehicleData = fakeData;
  const [vehicleInfo , setVehicleInfo] = useState(vehicleData);
  return (
    <div className="home">
            <div className="row vehicle-box">
               {vehicleInfo.map(vehicle => <VehicleDetails vehicle={vehicle} key={vehicle.id} ></VehicleDetails>)}
        </div>
    </div>
  );
};

export default Home;
