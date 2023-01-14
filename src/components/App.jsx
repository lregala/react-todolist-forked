import React, { useState } from "react";

import ToDoList from "./ToDoList";

function App() {
  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState([]);
  const [showItems, setShowItems] = useState(true);

  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }

  function addItem() {
    setItems((prevItems) => {
      return [...prevItems, inputText];
    });
    setInputText("");
  }

  function deleteItem(id) {
    setItems((prevItems) => {
      return prevItems.filter((item, index) => {
        return id !== index;
      });
    });
  }

  function handleList() {
    setShowItems((prevValue) => {
      return !prevValue;
    });
    console.log(showItems);
  }
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} type="text" value={inputText} />
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        {items.length > 0 && (
          <button onClick={handleList}>
            <span>{showItems ? "Hide" : "Show"}</span>
          </button>
        )}
        {showItems && (
          <ToDoList list={items} onAdd={addItem} onDelete={deleteItem} />
        )}
      </div>
    </div>
  );
}

export default App;
