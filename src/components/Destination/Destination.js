import React, { useState } from 'react';
import './Destination.css';
import Map from '../images/Map.png';
const Destination = (props) => {
    const [ride,setRide] = useState(true);
    return (
        <div className="d-flex">
            <div className="form-div col-lg-4">
            <div className="search-form">
                {ride ? (<form action="">
                <h1>Ride with </h1>
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
                    <div>$67</div>
                    <div>$67</div>
                    <div>$67</div>
                </div> ) }                
            </div>
            
        </div>
        <div className="map-box col-lg-7">
            <img src={Map} alt=""/>
        </div>
        </div>
    );
};

export default Destination;