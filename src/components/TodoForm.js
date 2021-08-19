import { useState, useRef, useEffect } from "react";
import { useTodoContext } from "./TodoContext";

export default () => {
  const [todo, setTodo] = useState("");
  const inputRef = useRef();
  const { addTodo } = useTodoContext();
  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(todo);
    setTodo("");
  };

  useEffect(() => {
    //inputRef.current.focus();
  });

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        ref={inputRef}
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button type="submit"> Add </button>
    </form>
  );
};
