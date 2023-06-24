import React from "react";
import { useSelector } from "react-redux";

const TodoList = () => {
  const todos = useSelector((state) => state.TodoReducer.todos);
  return (
    <div>
      <span>제목</span>
      <span>내용</span>
      <button>삭제</button>
    </div>
  );
};

export default TodoList;
