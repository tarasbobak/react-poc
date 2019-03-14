interface Action {
    type: string;
    value: any;
}

export const ADD_TODO = 'ADD_TODO';

export const addTodo = (todoItem: { label: string }): Action => {
    return {
        type: ADD_TODO,
        value: todoItem
    };
};
