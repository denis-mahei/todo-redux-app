import Text from '../Text/Text';
import { useDispatch, useSelector } from 'react-redux';
import { selectTodos } from '../../redux/selectors.js';
import Todo from '../Todo/Todo.jsx';
import Grid from '../Grid/Grid.jsx';

const TodoList = () => {
  const todos = useSelector(selectTodos);
  return (
    <>
      {todos.length > 0 ? (
        <Grid>
          {todos.map((todo, index) => (
            <Todo key={todo.id} id={todo.id} counter={index} text={todo.text} />
          ))}
        </Grid>
      ) : (
        <Text textAlign="center">We did not find any todo😯</Text>
      )}
    </>
  );
};

export default TodoList;
