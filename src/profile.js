import React from "react";

const Profile = (props) => (
  <div className="profile">
    <h1>{props.name}</h1>
    <img src={props.imageUrl} alt="profile" />
    <p>{props.description}</p>
  </div>
);
export default Profile