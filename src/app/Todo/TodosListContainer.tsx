import { connect } from 'react-redux';
import TodosList from './TodosList';
import { addTodo, removeTodo, completeTodo } from '../../actionCreators/todoActions';

const mapStateToProps = (state: any) => ({
  todos: state.todo.todos
});

const mapDispatchToProps = (dispatch: any) => ({
  onAddTodo: (todoItem: { label: string }) => {
    dispatch(addTodo(todoItem));
  },
  onCompleteTodo: (id: number) => {
    dispatch(completeTodo(id));
  },
  onRemoveTodo: (id: number) => {
    dispatch(removeTodo(id));
  }
});

const TodosListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodosList);

export default TodosListContainer;
