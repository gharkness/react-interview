import React from 'react'

const TodoList = () => {
    return (
        <div className="bg-gray-100 p-4 rounded-lg shadow-md">
        <h1 className="text-2xl font-semibold mb-4">Todo List</h1>
        <div className="flex mb-4">
          <input
            type="text"
            className="w-full p-2 border rounded-md"
          />
          <button
            className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-md"
          >
            Add
          </button>
        </div>
        {/* Display task list */}
      </div>
    )
}

export default TodoList