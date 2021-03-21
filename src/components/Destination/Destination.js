import React, { useEffect, useState } from 'react';
import './Destination.css';
import Map from '../Map/Map';
import fakeData from '../fakeData/Data.json';
import { useParams } from 'react-router';
const Destination = (props) => {
    const {name} = useParams();
    const [ride,setRide] = useState(true);
    const [vehicle, setVehicle] = useState([]);
    useEffect(() =>{
        setVehicle(fakeData); 
    },[])
    const selectedVehicle = vehicle.find(vh => vh.name === name);
    return (
        <div className="row d-flex">
            <div className="form-div col-lg-4 col-sm-12">
            <div className="search-form">
                {ride ? (<form action="">
                <h1>Ride with {name}</h1>
                <label htmlFor="">Pick From</label>
                <br/>
                <input className="input-box" type="text" name="" id="" required/>
                <br/>
                <label htmlFor="">Pick To</label>
                <br/>
                <input className="input-box" type="text" name="" id="" required/>
                <br/>
                <button onClick={() => setRide(false)} className="btn btn-warning search-btn" type="submit">Search</button>
                </form>):
                ( <div>
                    <div className="destination-box">
                        <div><h4>Mirpur 1</h4></div>
                        <div><h4>Dhanmondi</h4></div>
                    </div>
                    <div><img style={{width:'40px'}} src={selectedVehicle.img} alt=""/>{selectedVehicle.name} $67</div>
                    <div><img style={{width:'40px'}} src={selectedVehicle.img} alt=""/>{selectedVehicle.name} $67</div>
                    <div><img style={{width:'40px'}} src={selectedVehicle.img} alt=""/>{selectedVehicle.name} $67</div>
                    
                    
                </div> ) }                
            </div>
            
        </div>
        <div className="map-box col-lg-7 col-sm-12">
           <Map></Map>
        </div>
        </div>
    );
};

export default Destination;