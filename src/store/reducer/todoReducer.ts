import { ActionsType, ADD_TODO, DELETE_TODO } from "../action/todos";

interface todoType {
  title: string;
  isComplete: boolean;
}

interface InitialStateType {
  todos: todoType[];
}

const initialState: InitialStateType = {
  todos: [],
};

// 상태 업데이트 로직
// action: add | delete
export default function TodoReducer(state = initialState, action: ActionsType) {
  switch (action.type) {
    case ADD_TODO:
      return {
        todos: [...state.todos, action.payload.todo],
      };
    case DELETE_TODO:
      return {
        todos: [...state.todos.filter((todo) => todo.id !== action.payload.id)],
      };
    default:
      return state;
  }
}
