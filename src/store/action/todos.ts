export const ADD_TODO = "ADD_TODO";
export const DELETE_TODO = "DELETE_TODO";
export const ISCOMPLETE_TODO = "ISCOMPLETE_TODO";
export const UPDATE_TODO = "UPDATE_TODO";

let id = 1;

interface TodoType {
  title: string;
  isComplete: boolean;
}

export const addTodo = (todo: TodoType) => {
  return {
    type: ADD_TODO,
    payload: {
      todo: {
        id: id++,
        title: todo.title,
        isComplete: todo.isComplete,
      },
    },
  };
};

export const deleteTodo = (id: number) => {
  return {
    type: DELETE_TODO,
    payload: {
      id,
    },
  };
};

/**id 값으로 todo 조회 후 isComplete값 변경 */
export const isCompleteTodo = (id: number) => {
  return {
    type: ISCOMPLETE_TODO,
    payload: {
      id,
    },
  };
};

export type ActionsType =
  | ReturnType<typeof addTodo>
  | ReturnType<typeof deleteTodo>;
