import {
  ActionsType,
  ADD_TODO,
  DELETE_TODO,
  ISCOMPLETE_TODO,
  UPDATE_TODO,
} from "../action/todos";

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
// action: add | delete | isCompelete | update
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
    case ISCOMPLETE_TODO:
      return {
        todos: [
          ...state.todos.map((todo) =>
            todo.id === action.payload.id
              ? { ...todo, isComplete: !todo.isComplete }
              : todo
          ),
        ],
      };
    case UPDATE_TODO:
      return {
        todos: [
          ...state.todos.map((todo) =>
            todo.id === action.payload.todo.id
              ? { ...todo, title: action.payload.todo.title }
              : todo
          ),
        ],
      };
    default:
      return state;
  }
}
