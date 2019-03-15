import { ITodo } from '../app/Todo/TodosList';
import { ADD_TODO, REMOVE_TODO, COMPLETE_TODO } from '../actionCreators/todoActions';

interface TodoState {
    todos: ITodo[];
}

let counter = 0;

const initialState = {
  todos: []
};

export default function todo(state: TodoState = initialState, action: any): TodoState {
    switch (action.type) {
        case ADD_TODO:
            return {
                todos: [...state.todos, {
                    label: action.value.label,
                    id: ++counter,
                    completed: false
                }]
            };
        case REMOVE_TODO:
            return {
                todos: state.todos.filter(todoItem => todoItem.id !== action.value)
            };
        case COMPLETE_TODO:
            return {
                todos: state.todos.map(todoItem => {
                    if (todoItem.id === action.value) {
                        todoItem.completed = true;
                    }

                    return todoItem;
                })
            }
        default:
        return state;
    }
}
