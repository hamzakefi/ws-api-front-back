import React from "react";
import "./UserCard.css";

const UserCard = ({ user }) => {
  return (
    <li className="user-card-item">
      <h3>{user.name}</h3>
      <p>Email: {user.name}</p>
      <p>Phone: {user.name}</p>
    </li>
  );
};

export default UserCard;
