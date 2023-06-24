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
      <form
        onSubmit={handleSubmit}
        className="flex flex-row gap-4 bg-slate-200 p-5"
      >
        <input
          type="text"
          value={text}
          onChange={handleChange}
          className=" pl-4 p-3 border-2 border-black flex-1"
        />
        <button className="border-2 border-black px-3 py-2 bg-slate-500 rounded-lg text-white flex-0">
          추가
        </button>
      </form>
    </div>
  );
};

export default InputForm;
