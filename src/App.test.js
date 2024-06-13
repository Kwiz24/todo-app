import { render, fireEvent, screen } from '@testing-library/react';
import { act } from 'react';
import App from './App';

test('renders Todo application with input and add button', () => {
  act(() => {
    render(<App />);
  });

  const inputElement = screen.getByPlaceholderText('Enter a task');
  const addButton = screen.getByText('Add');

  expect(inputElement).toBeInTheDocument();
  expect(addButton).toBeInTheDocument();
});

test('adds a new task to the list', () => {
  act(() => {
    render(<App />);
  });
  
  const inputElement = screen.getByPlaceholderText('Enter a task');
  const addButton = screen.getByText('Add');

  act(() => {
    fireEvent.change(inputElement, { target: { value: 'Buy groceries' } });
    fireEvent.click(addButton);
  });

  const taskElement = screen.getByTestId('task-0');
  expect(taskElement).toBeInTheDocument();
  expect(taskElement).toHaveTextContent('Buy groceries');
});
