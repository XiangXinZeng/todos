import "./styles.css";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";

import TodoProvider from "./components/TodoContext";

export default function App() {
  return (
    <div className="App">
      <h1>Dev Todos</h1>
      <TodoProvider>
        <TodoForm />
        <TodoList />
      </TodoProvider>
    </div>
  );
}
