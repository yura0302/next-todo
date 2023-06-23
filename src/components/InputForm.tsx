import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "@/store/action/todos";

const InputForm = () => {
  const dispatch = useDispatch();
  const [text, setText] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault;
    const todo = {
      id: 1,
      title: text,
      isComplete: false,
    };

    dispatch(addTodo(todo));
    console.log(todo);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input />
        <button>추가</button>
      </form>
    </div>
  );
};

export default InputForm;
