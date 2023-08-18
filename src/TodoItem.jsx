
export function TodoItem({completed, id, title, key, toggleTodo, deleteTodo}){
    return(
    <li>
              <label>
                <input type="checkbox" checked={completed} onChange={e => toggleTodo(id, e.checked)}/>
                {title}
              </label>
              <button className="btn btn-danger" onClick={() => deleteTodo(id)}>Delete</button>
            </li>
    );
}