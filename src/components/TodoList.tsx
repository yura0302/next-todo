import React from "react";
import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const todos = useSelector((state) => state.TodoReducer.todos);
  return (
    <div className="w-2/5 px-5 pb-4 gap-4 bg-slate-200 flex flex-col justify-around">
      {todos.map((todo: { id: number }) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

export default TodoList;
