import React, { FormEvent, ChangeEvent } from 'react';
import styles from './TodoForm.module.scss';

interface TodoFormProps {
    onAddTodo: (todoTitle: string) => void;
}

class TodoForm extends React.Component<TodoFormProps> {
    public state = {
        todoTitle: ''
    };

    public render() {
        const { todoTitle } = this.state;

        return (
            <form
                onSubmit={this.onFormSubmit}
                className={styles['todo-form']}
            >
                <input
                    type="text"
                    value={todoTitle}
                    onChange={this.onTodoTitleChange}
                    placeholder="Type todo item here"
                />
            </form>
        );
    }

    private onTodoTitleChange = (event: ChangeEvent<HTMLInputElement>) => {
        this.setState({ todoTitle: event.target.value });
    }

    private onFormSubmit = (event: FormEvent) => {
        if (this.state.todoTitle) {
            this.props.onAddTodo(this.state.todoTitle);
            this.setState({ todoTitle: '' });
        }

        event.preventDefault();
    }
}

export default TodoForm;