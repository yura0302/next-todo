import React from "react";
import { useSelector } from "react-redux";

const TodoList = () => {
  const todos = useSelector((state) => state.TodoReducer.todos);
  return (
    <div>
      {todos.map((todo: { id: number }) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

export default TodoList;
