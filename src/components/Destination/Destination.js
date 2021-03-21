import React from 'react';
import './Destination.css';
const Destination = () => {
    return (
        <div>
            <h1>Ride with</h1>
            <div className="search-form">
                <form action="">
                <label htmlFor="">Pick From</label>
                <br/>
                <input type="text" name="" id="" required/>
                <br/>
                <label htmlFor="">Pick To</label>
                <br/>
                <input type="text" name="" id="" required/>
                <br/>
               <button className="btn btn-warning" type="submit">Search</button>
                </form>
            </div>
        </div>
    );
};

export default Destination;