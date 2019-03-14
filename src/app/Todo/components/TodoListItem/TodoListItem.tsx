import React from 'react';
import { ITodo } from '../../TodosList';
import styles from './TodoListItem.module.scss';

interface TodoListItemProps {
    todo: ITodo;
}

class TodoListItem extends React.Component<TodoListItemProps> {
    public render() {
        const { label } = this.props.todo;

        // return (
        //     <li>{label}</li>
        // );

        return (
            <div
                className={`${styles['category-card-wrapper']} clearfix ${styles['in-progress']}`}>
                <div className={`col-sm-9 ${styles['card-content']}`}>
                    <h3>{label}</h3>
                    <p>Description...</p>
                </div>
                <div className={`col-sm-3 ${styles['card-actions-wrapper']}`}>
                    <button type="button" className="btn btn-success">Complete</button>
                    <button type="button" className="btn btn-danger">Delete</button>
                </div>
            </div>
        );
    }
}

export default TodoListItem;
