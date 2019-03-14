import { connect } from 'react-redux';
import TodosList from './TodosList';
import { addTodo } from '../../actionCreators/todoActions';

const mapStateToProps = (state: any) => ({
  todos: state.todo.todos
});

const mapDispatchToProps = (dispatch: any) => ({
  onAddTodo: (todoItem: { label: string }) => {
    dispatch(addTodo(todoItem));
  }
});

const TodosListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodosList);

export default TodosListContainer;
