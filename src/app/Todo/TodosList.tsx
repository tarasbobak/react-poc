import React from 'react';
import { RouteComponentProps } from '@reach/router';
import TodoListItem from './components/TodoListItem/TodoListItem';
import styles from './TodoList.module.scss';

export interface ITodo {
    label: string;
    id?: number;
}

interface TodoProps extends RouteComponentProps {
    onAddTodo: (todoItem: ITodo) => void;
    todos: ITodo[];
}

class TodosList extends React.Component<TodoProps> {
    public render() {
        const { todos } = this.props;
        console.log(this.props);

        return (
            <React.Fragment>
                {todos.length ? (
                    <ul className={styles['todo-list']}>
                        {todos.map(todo => <TodoListItem key={todo.id} todo={todo} />)}
                    </ul>
                ) : null}
                <button onClick={this.onAddTodo}>Add todo</button>
            </React.Fragment>
        );
    }

    private onAddTodo = () => {
        const todoItem = {
            label: 'I have got work to do!'
        };

        this.props.onAddTodo(todoItem);
    }
}

export default TodosList;
