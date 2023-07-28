import React, { useEffect, useRef, useState } from "react";
import { deleteTodo, isCompleteTodo, updateTodo } from "@/store/action/todos";
import { useDispatch } from "react-redux";
import { MdOutlineCheckBoxOutlineBlank, MdCheckBox } from "react-icons/md";

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();
  const [edited, setEdited] = useState(false);
  const [newText, setNewText] = useState(todo.title);

  const editInputRef = useRef<any>(null);

  // focus 값을 찾을 수 없을 때
  // current가 있는지 확인 한 뒤 focus 사용
  useEffect(() => {
    if (edited && editInputRef.current) {
      editInputRef.current.focus();
    }
  }, [edited]);

  const handleDelete = () => {
    dispatch(deleteTodo(todo.id));
  };

  const handleCheck = () => {
    dispatch(isCompleteTodo(todo.id));
  };

  const handleEdit = () => {
    setEdited(true);
  };

  const onChangeEditInput = (e: any) => {
    setNewText(e.target.value);
  };

  const onClickSubmitButton = () => {
    const nextTodoList = {
      id: todo.id,
      editTitle: newText,
    };
    dispatch(updateTodo(nextTodoList));
    setEdited(false);
  };

  return (
    <div className="flex flex-row justify-between items-center">
      <span className="flex flex-row items-center">
        <span>
          {todo.isComplete ? (
            <MdCheckBox onClick={handleCheck} size="30" />
          ) : (
            <MdOutlineCheckBoxOutlineBlank onClick={handleCheck} size="30" />
          )}
        </span>
        {edited ? (
          <input
            type="text"
            value={newText}
            onChange={onChangeEditInput}
            ref={editInputRef}
          />
        ) : (
          <span className="font-semibold ml-3">{todo.title}</span>
        )}
      </span>

      <span>
        {edited ? (
          <button
            onClick={onClickSubmitButton}
            className="border-2 border-black px-3 py-1 bg-slate-500 text-white rounded-lg"
          >
            확인
          </button>
        ) : (
          <button
            onClick={handleEdit}
            className="border-2 border-black px-3 py-1 bg-slate-500 text-white rounded-lg"
          >
            수정
          </button>
        )}
        <button
          onClick={handleDelete}
          className="border-2 border-black px-3 py-1 ml-1 bg-slate-500 text-white rounded-lg"
        >
          삭제
        </button>
      </span>
    </div>
  );
};

export default TodoItem;
