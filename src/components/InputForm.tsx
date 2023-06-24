import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "@/store/action/todos";

const InputForm = () => {
  const dispatch = useDispatch();
  const [text, setText] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const todo = {
      title: text,
      isComplete: false,
    };

    dispatch(addTodo(todo));
    console.log(todo);
    setText("");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={text} onChange={handleChange} />
        <button>추가</button>
      </form>
    </div>
  );
};

export default InputForm;
