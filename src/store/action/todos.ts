export const ADD_TODO = "ADD_TODO";
export const DELETE_TODO = "DELETE_TODO";

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

export type ActionsType =
  | ReturnType<typeof addTodo>
  | ReturnType<typeof deleteTodo>;
