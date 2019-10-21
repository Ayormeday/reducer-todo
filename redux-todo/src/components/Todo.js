import React from "react";

export default function Todo(props) {
  return (
    <div>
      <li onClick={props.toggleComplete(props.item.id)}>
        {props.item.item}
        {props.item.completed ? " - Complete" : " - Not Complete"}
      </li>
      <button onClick={() => props.deleteItem(props.item.id)}>Delete</button>
    </div>
  );
}
