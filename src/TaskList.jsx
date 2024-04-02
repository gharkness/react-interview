import React from 'react'

const TaskList = (props) => {
    const {todoList, setTodoList} = props;
    const todoItems = [];
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
    const completeTodoItem = (item, index) => {
        const tempList = todoList;
        const tempItemDetails = {label:item.label, completed: true}
        tempList.splice(index, 1, tempItemDetails);
        setTodoList([...tempList]);
    }

    todoList.map((item, index)=>{return todoItems.push(<div><div data-testid={`todo-${index}`}>{item.label}</div><button
    className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-md"
    data-testid={`completeButton-${index}`}
    onClick={()=>{completeTodoItem(item, index)}}
    disabled={item.completed}
  >
    Complete
  </button></div>)})
    
    return (
        <div>
            {todoItems}
        </div>)
}

export default TaskList