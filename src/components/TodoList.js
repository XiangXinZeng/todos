import Todo from "./Todo";
import { useTodoContext } from "./TodoContext";

export default () => {
  const { todos } = useTodoContext();
  return (
    <ul>
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} />
      ))}
    </ul>
  );
};
