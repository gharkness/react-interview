import React, { useState } from 'react'
import TaskList from './TaskList';

const TodoList = () => {
    const [todoInput, setTodoInput] = useState('');
    const [todoList, setTodoList] = useState([]);

    const addTodoItem = () => {
        if(todoInput){
            setTodoList([...todoList, {label:todoInput, completed:false}]);
        }
    }


    
    return (
        <div className="bg-gray-100 p-4 rounded-lg shadow-md">
        <h1 className="text-2xl font-semibold mb-4">Todo List</h1>
        <div className="flex mb-4">
          <input
            type="text"
            className="w-full p-2 border rounded-md"
            data-testid='input'
            value={todoInput}
            onChange={(e)=>{setTodoInput(e.target.value)}}
          />
          <button
            className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-md"
            data-testid='addButton'
            onClick={()=>{addTodoItem()}}
          >
            Add
          </button>
        </div>
        {/* Display task list */}
        <TaskList todoList={todoList} setTodoList={setTodoList}/>
      </div>
    )
}

export default TodoList