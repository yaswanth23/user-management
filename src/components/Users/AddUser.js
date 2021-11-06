import React from "react";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";

const AddUser = (props) => {
  const addUserHandler = (event) => {
    event.preventDefault();
  };
  return (
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input id="username" type="text" />
        <label htmlFor="age">Age (Year)</label>
        <input id="age" type="number" />
        <button type="submit">Add user</button>
      </form>
    </Card>
  );
};

export default AddUser;
