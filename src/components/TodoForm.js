import { useState, useRef, useEffect } from "react";
import { useTodoContext } from "./TodoContext";

export default () => {
  const [todo, setTodo] = useState("");
  const inputRef = useRef();
  const { addTodo, editingTodo, updateTodoText } = useTodoContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    editingTodo
      ? updateTodoText({ ...editingTodo, title: todo })
      : addTodo(todo);
    setTodo("");
  };

  useEffect(() => {
    //inputRef.current.focus();
  });

  useEffect(() => {
    editingTodo ? setTodo(editingTodo.title) : setTodo("");
  }, [editingTodo]);

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        ref={inputRef}
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button type="submit">{editingTodo ? "Update" : "Add"}</button>
    </form>
  );
};
