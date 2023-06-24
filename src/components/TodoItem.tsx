import React from "react";
import { deleteTodo } from "@/store/action/todos";
import { useDispatch } from "react-redux";

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteTodo(todo.id));
  };
  return (
    <div className="flex flex-row justify-between items-center">
      <span className="font-semibold ml-3">{todo.title}</span>
      {/* <span>{todo.isComplete ? "완료" : "미완료"}</span> */}
      <button
        onClick={handleDelete}
        className="border-2 border-black px-3 py-1 ml-1 bg-slate-500 text-white rounded-lg"
      >
        삭제
      </button>
    </div>
  );
};

export default TodoItem;
