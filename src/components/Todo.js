import { useTodoContext } from "./TodoContext";

export default ({ todo }) => {
  const { removeTodo, toggleTodo, findTodo } = useTodoContext();
  return (
    <li>
      <input
        type="checkbox"
        checked={todo.done}
        onChange={() => toggleTodo(todo.id)}
      />
      <span style={{ textDecoration: todo.done ? "line-through" : null }}>
        {todo.title}
      </span>
      <button onClick={() => findTodo(todo.id)}>Edit</button>
      <button onClick={() => removeTodo(todo.id)}>Del</button>
    </li>
  );
};
