import React from "react";
import { Link } from "react-router-dom";

const VehicleDetails = (props) => {
  const { name, img } = props.vehicle;
  return (
    <div>
      <Link to={`/destination/${name}`}>
        <div className="col-md-4 col-sm-12 vehicle-box">
          <div
            className="card-div card container text-center"
            style={{ width: "14rem" }}
          >
            <img
              style={{ padding: "20px" }}
              src={img}
              class="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h2 className="card-title">{name}</h2>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default VehicleDetails;
