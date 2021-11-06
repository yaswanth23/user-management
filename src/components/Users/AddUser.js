import React from "react";

const AddUser = (props) => {
  const addUserHandler = (event) => {
    event.preventDefault();
  };
  return (
    <form onSubmit={addUserHandler}>
      <label htmlFor="username">Username</label>
      <input id="username" type="text" />
      <label htmlFor="age">Age (Year)</label>
      <input id="age" type="number" />
      <button type="submit">Add user</button>
    </form>
  );
};

export default AddUser;
