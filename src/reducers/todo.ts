import { ITodo } from '../app/Todo/TodosList';
import { ADD_TODO } from '../actionCreators/todoActions';

interface TodoState {
    todos: ITodo[];
}

let counter = 0;

const initialState = {
  todos: []
};

export default function todo(state: TodoState = initialState, action: any): TodoState {
    console.log(action);

    switch (action.type) {
        case ADD_TODO:
            return {
                todos: [...state.todos, {
                    label: action.value.label,
                    id: ++counter
                }]
            };
        default:
        return state;
    }
}
