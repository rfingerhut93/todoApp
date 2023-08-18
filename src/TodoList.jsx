import { useState } from "react";
import { TodoItem } from "./TodoItem";

export function TodoList({ todos, toggleTodo, deleteTodo}){
    return(
        <ul className="list">
        {todos.length === 0 && "No todos"}
        {todos.map(todo => {
          return(
            // Same as passing ALL of todo... like:
            // completed={todo.completed} 
            // id={todo.id} 
            // title={todo.title} 
            <TodoItem {...todo} key={todo.id} toggleTodo = {toggleTodo} deleteTodo={deleteTodo}/>
          )
        })}
      </ul>
      )
}