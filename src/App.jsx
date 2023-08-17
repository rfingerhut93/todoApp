import {useState} from 'react'
import "./styles.css"

export default function App(){
  const [newItem, setNewItem] = useState("");
  const [todos, setTodos] = useState([]);

  function handleSubmit(e){
    e.preventDefault();

    setTodos((currentTodos) => {
      return [
        ...currentTodos, 
        {id: crypto.randomUUID(), title: newItem, completed: false},
      ]
    })
  }

  return (
    <>
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

      <h1 className="header">Todo List</h1>
      <ul className="list">

        {todos.map(todo => {
          return(
            <li>
              <label>
                <input type="checkbox" checked={todo.completed}/>
                {todo.title}
              </label>
              <button className="btn btn-danger">Delete</button>
            </li>
          )
        })}
      </ul>
    </>
  );}
