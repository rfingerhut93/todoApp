import { useState } from "react";

export function NewTodoForm({onSubmit}){
    const [newItem, setNewItem] = useState("");

    {/* Sets new item has whatever is typed into the input box.
      Sets title as what was typed, gives a random id, and 
      sets completed as false (used with checkbox).
      New item is set back to an empty array at the end to
      clear the input field. */}
  function handleSubmit(e){
    e.preventDefault();
    if (newItem === "") return;

    onSubmit(newItem);
    setNewItem("");
  }

  return (
    <form onSubmit={handleSubmit} action="" className="new-item-form">
        <div className="form-row">
          <label htmlFor="item">New Item</label>
          {/* This sets the value with every new character entered into the input box.
           e => setNewItem(e.target.value) */}
          <input onChange={e =>
            setNewItem(e.target.value)}
            type="text"
            id="item"
            value={newItem}/>
        </div>
        <button className="btn ">Add</button>
      </form>
  )
}