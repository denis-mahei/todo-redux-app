import { selectCurrentTodo, selectTodos } from './redux/selectors.js';
import { useSelector } from 'react-redux';
import Text from './components/Text/Text.jsx';
import Container from './components/Container/Container';
import Header from './components/Header/Header';
import Section from './components/Section/Section';
import Form from './components/Form/Form.jsx';
import TodoList from './components/TodoList/TodoList.jsx';
import EditForm from './components/EditForm/EditForm.jsx';
import Filter from './components/Filter/Filter.jsx';

export const App = () => {
  const isEdit = useSelector(selectCurrentTodo);
  const todos = useSelector(selectTodos);
  return (
    <>
      <Header />
      <Section>
        <Container>
          {!isEdit ? <Form /> : <EditForm />}
          {todos.length > 2 && <Filter />}
          {todos.length > 0 ? (
            <TodoList />
          ) : (
            <Text textAlign="center">Create your first todo😉</Text>
          )}
        </Container>
      </Section>
    </>
  );
};
