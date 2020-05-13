import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { push } from "connected-react-router";
import * as R from "ramda";
import MapboxCourier from "../../molecules/Map/Mapbox_Courier";
import MapboxDonor from "../../molecules/Map/Mapbox_Donor";

export default function HomePage() {
  const dispatch = useDispatch();
  const { user } = useSelector(R.pick(["user"]));

  useEffect(() => {
    if (R.isEmpty(user)) {
      dispatch(push("/login"));
    }
  }, []);

  return (
    <div className="home-page page">
      <div className="section">
        <div className="container">
          <h1 className="title is-1">
            Home Page
            {user.userType == "donor" ? <MapboxDonor /> : <MapboxCourier />}
          </h1>
        </div>
      </div>
    </div>
  );
}
