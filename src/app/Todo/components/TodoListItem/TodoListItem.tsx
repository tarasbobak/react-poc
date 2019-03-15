import React from 'react';
import { ITodo } from '../../TodosList';
import styles from './TodoListItem.module.scss';

interface TodoListItemProps {
    todo: ITodo;
    onCompleterTodo: (id: number) => void;
    onRemoveTodo: (id: number) => void;
}

class TodoListItem extends React.Component<TodoListItemProps> {
    public render() {
        const { label, completed } = this.props.todo;
        const todoItemStatusClass = completed ? styles.completed : styles['in-progress'];

        return (
            <div
                className={`${styles['category-card-wrapper']} clearfix ${todoItemStatusClass}`}>
                <div className={`col-sm-9 ${styles['card-content']}`}>
                    <h3>{label}</h3>
                    <p>Description...</p>
                </div>
                <div className={`col-sm-3 ${styles['card-actions-wrapper']}`}>
                    <button
                        type="button"
                        className="btn btn-success"
                        onClick={this.onCompleteTodo}
                    >
                        Complete
                    </button>
                    <button
                        type="button"
                        className="btn btn-danger"
                        onClick={this.onRemoveTodo}
                    >
                        Delete
                    </button>
                </div>
            </div>
        );
    }

    private onCompleteTodo = () => {
        this.props.onCompleterTodo(this.props.todo.id);
    }

    private onRemoveTodo = () => {
        this.props.onRemoveTodo(this.props.todo.id);
    }
}

export default TodoListItem;
