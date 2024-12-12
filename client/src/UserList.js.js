import React, { useState, useEffect } from "react";
import axios from "axios";
import UserCard from "./UserCard"; // Import du composant UserCard
import "./UserList.css";

const UserList = () => {
  const [listOfUsers, setListOfUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get("http://localhost:4321/api/user/users");
        setListOfUsers(response.data.users);

      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };
    fetchUsers();
  }, []);

  return (
    <div className="user-list-container">
      <h1>User List</h1>
      <ul className="user-list">
        {listOfUsers.map((user) => (
          <UserCard  user={user} />
        ))}
      </ul>
    </div>
  );
};

export default UserList;
