import React, { useContext, useState } from 'react'
import { AuthContext } from '../../contexts/Auth';
import { Todo } from './components';

function TodosPage() {
  const user = useContext(AuthContext).user;
  console.log(user)
  const [todo,setTodo] = useState("");
  const [todos,setTodos] = useState([]);

  function handleAddTodo(e){
    e.preventDefault();
    setTodos([...todos,{title:todo,isDone:false}])
    setTodo("");
  }

  return (

    <div>
      <h1>Hello! {user.email}</h1>
      <ul>
        {todos.map((todo,index) => {
          return (
            <Todo />
          )
        })}

      </ul>
      <div>
        <form onSubmit={e => {handleAddTodo(e)}}>
          <input className='border h-8 placeholder:text-gray-200' placeholder='Enter a Todo' type="text" value={todo} onChange={e => {setTodo(e.target.value)}}  />
          <input type="submit" value="Enter Todo.." />
        </form>
      </div>
    </div>
  )
}

export default TodosPage