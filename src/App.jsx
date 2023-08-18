import {useState} from 'react'
import "./styles.css"
import { NewTodoForm } from './NewTodoForm';

export default function App(){
  const [todos, setTodos] = useState([]);

  function addTodo(title){
    setTodos((currentTodos) => {
      return [
        ...currentTodos, 
        {id: crypto.randomUUID(), title, completed: false},
      ]
    })
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

function deleteTodo(id){
  setTodos(currentTodos => {
    return currentTodos.filter(todo => todo.id !== id)
  })
}

  return (
    <>
    <NewTodoForm onSubmit={addTodo}/>
      <h1 className="header">Todo List</h1>
      <ul className="list">
        {todos.length === 0 && "No todos"}
        {todos.map(todo => {
          return(
            <li key={todo.id}>
              <label>
                <input type="checkbox" checked={todo.completed} onChange={e => toggleTodo(todo.id, e.checked)}/>
                {todo.title}
              </label>
              <button className="btn btn-danger" onClick={() => deleteTodo(todo.id)}>Delete</button>
            </li>
          )
        })}
      </ul>
    </>
  );}
