import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import TodoList from './TodoList';

describe('TodoList component', () => {
  it('renders the "Todo List" heading', () => {
    render(<TodoList />);

    screen.getByText('Todo List');
  });

  it('needs to add a task if the input has content', () => {
    render(<TodoList />);

    fireEvent.change(screen.getByTestId('input'), { target: { value: "a todo item" }})

    const button = screen.getByTestId('addButton');
    fireEvent.click(button);

    const todo= screen.getByText('a todo item');
    expect(todo).toBeInTheDocument();

  });

  it('needs to NOT add a task if the input has NO content', () => {
    render(<TodoList />);

    const button = screen.getByTestId('addButton');
    fireEvent.click(button);
    
    expect(screen.getByTestId('todo-0')).not.toBeDefined();

  });

  it('needs to be able to complete tasks', () => {
    render(<TodoList />);
    
    fireEvent.change(screen.getByTestId('input'), { target: { value: "a todo item" }})

    const addButton = screen.getByTestId('addButton');
    fireEvent.click(addButton);

    const completeButton = screen.getByTestId('completeButton-0');
    fireEvent.click(completeButton);
    
    expect(completeButton).toBeDisabled();

  });

//   it('needs to NOT add a task if the input has NO content', () => {
//     render(<TodoList />);

//     const button = screen.getByTestId('addButton');
//     fireEvent.click(button);
    
//     expect(screen.getByTestId('todo-0')).not.toBeDefined();

//   });

  it('needs to be able to delete an item', () => {
    render(<TodoList />);

    const button = screen.getByTestId('addButton');
    fireEvent.click(button);
    
    expect(screen.getByTestId('todo-0')).not.toBeDefined();

  });

//   it('renders the "Todo List" heading', () => {
//     render(<TodoList />);

//     screen.getByText('Todo List');
//   });
//   it('renders the "Todo List" heading', () => {
//     render(<TodoList />);

//     screen.getByText('Todo List');
//   });
//   it('renders the "Todo List" heading', () => {
//     render(<TodoList />);

//     screen.getByText('Todo List');
//   });
});