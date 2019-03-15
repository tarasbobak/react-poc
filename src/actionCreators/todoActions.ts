interface Action {
    type: string;
    value: any;
}

export const ADD_TODO = 'ADD_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';
export const COMPLETE_TODO = 'COMPLETE_TODO';

export const addTodo = (todoItem: { label: string }): Action => {
    return {
        type: ADD_TODO,
        value: todoItem
    };
};

export const removeTodo = (id: number): Action => {
    return {
        type: REMOVE_TODO,
        value: id
    };
};

export const completeTodo = (id: number): Action => {
    return {
        type: COMPLETE_TODO,
        value: id
    };
};
