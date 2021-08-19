import { createContext, useContext, useState } from "react";
import { v4 } from "uuid";

const initialTodos = [
  { id: v4(), title: "Explore Azure", done: false },
  { id: v4(), title: "Learn React", done: true },
  { id: v4(), title: "Learn Redeux", done: false }
];

const TodoContext = createContext();

const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState(initialTodos);
  const [editingTodo, setEditingTodo] = useState(null);

  const addTodo = (title) => {
    setTodos([
      ...todos,
      {
        id: v4(),
        title,
        done: false
      }
    ]);
  };

  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      )
    );
  };

  const findTodo = (id) => {
    const todo = todos.find((todo) => todo.id === id);
    setEditingTodo(todo);
  };

  const updateTodoText = (updatedTodo) => {
    setTodos(
      todos.map((todo) => (todo.id === updatedTodo.id ? updatedTodo : todo))
    );
    setEditingTodo(null);
  };
  return (
    <TodoContext.Provider
      value={{
        todos,
        addTodo,
        removeTodo,
        toggleTodo,
        editingTodo,
        findTodo,
        updateTodoText
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export const useTodoContext = () => useContext(TodoContext);

export default TodoProvider;
