import {useState} from 'react'
import "./styles.css"

export default function App(){
  const [newItem, setNewItem] = useState("");
  const [todos, setTodos] = useState([]);


  {/* Sets new item has whatever is typed into the input box.
      Sets title as what was typed, gives a random id, and 
      sets completed as false (used with checkbox).
      New item is set back to an empty array at the end to
      clear the input field. */}
  function handleSubmit(e){
    e.preventDefault();

    setTodos((currentTodos) => {
      return [
        ...currentTodos, 
        {id: crypto.randomUUID(), title: newItem, completed: false},
      ]
    })

    setNewItem("");
  }

  {/* Maps through todo array for the key/id and then toggles the
      checked state of the check box and the todo element. */}
  function toggleTodo(id, completed){
    setTodos(currentTodos => {
      return currentTodos.map(todo => {
        if (todo.id === id){
          return {...todo, completed}
        }
        return todo
      })
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
            <li key={todo.id}>
              <label>
                <input type="checkbox" checked={todo.completed} onChange={e => toggleTodo(todo.id, e.checked)}/>
                {todo.title}
              </label>
              <button className="btn btn-danger">Delete</button>
            </li>
          )
        })}
      </ul>
    </>
  );}
