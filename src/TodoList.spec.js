import React from 'react';
import { render, screen } from '@testing-library/react';
import TodoList from './TodoList';

describe('TodoList component', () => {
  it('renders the "Todo List" heading', () => {
    render(<TodoList />);

    screen.getByText('Todo List');
  });
});