import React from "react";

export default function ToDoItem(props) {
  return (
    <div onClick={() => props.onClick(props.id)}>
      <li>{props.title}</li>
    </div>
  );
}
