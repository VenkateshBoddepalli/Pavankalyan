import React from "react";
import { useParams } from "react-router-dom";
import userData from "./usersData";
import "./mystyle.module.css";

function UserDetails() {
  const { userId } = useParams();
  const userDetailsData = userData.find((eachUser) => eachUser.id == userId);

  return (
    <div className="container-div">
      <div className="outer">
        <div className="details">
          {/* <h1 className='details'>UserDatails</h1> */}
          <h2 className="details">
            <br />
            <br />
            Name: {userDetailsData.name}
            <br />
            <br />
            User Details: {userDetailsData.username}
            <br />
            <br />
            Email: {userDetailsData.email}
            <br />
            <br />
            Phone: {userDetailsData.phone}
          </h2>
          {/* <h3 className='details'>User Details:{userDetailsData.username}</h3>
      <h3 className='details'>Email:{userDetailsData.email}</h3>
      <p className='details'>Phone:{userDetailsData.phone}</p> */}
        </div>
      </div>
    </div>
  );
}

export default UserDetails;
