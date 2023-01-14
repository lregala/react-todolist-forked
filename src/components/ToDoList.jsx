import React from "react";
import ToDoItem from "./ToDoItem";

export default function ToDoList(props) {
  return (
    <ul>
      {props.list.map((todoItem, index) => (
        <ToDoItem
          onClick={props.onDelete}
          key={index}
          id={index}
          title={todoItem}
        />
      ))}
    </ul>
  );
}
