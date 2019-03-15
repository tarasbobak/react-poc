import React from 'react';
import { RouteComponentProps } from '@reach/router';
import TodoListItem from './components/TodoListItem/TodoListItem';
import TodoForm from './components/TodoForm/TodoForm';
import styles from './TodoList.module.scss';

export interface ITodo {
    label: string;
    id: number;
    completed: boolean;
}

interface TodoProps extends RouteComponentProps {
    onAddTodo: (todoItem: { label: string }) => void;
    onRemoveTodo: (id: number) => void;
    onCompleteTodo: (id: number) => void;
    todos: ITodo[];
}

class TodosList extends React.Component<TodoProps> {
    public render() {
        const { todos, onCompleteTodo, onRemoveTodo } = this.props;

        return (
            <React.Fragment>
                <TodoForm onAddTodo={this.onAddTodo} />
                {todos.length ? (
                    <ul className={styles['todo-list']}>
                        {todos.map(todo => (
                            <TodoListItem
                                key={todo.id}
                                todo={todo}
                                onCompleterTodo={onCompleteTodo}
                                onRemoveTodo={onRemoveTodo}
                            />
                        ))}
                    </ul>
                ) : null}
            </React.Fragment>
        );
    }

    private onAddTodo = (todoTitle: string) => {
        this.props.onAddTodo({ label: todoTitle });
    }
}

export default TodosList;
