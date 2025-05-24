import Container from './components/Container/Container';
import Header from './components/Header/Header';
import Section from './components/Section/Section';
import Form from './components/Form/Form.jsx';
import TodoList from './components/TodoList/TodoList.jsx';
import { useSelector } from 'react-redux';
import EditForm from './components/EditForm/EditForm.jsx';
import { selectCurrentTodo } from './redux/selectors.js';

export const App = () => {
  const isEdit = useSelector(selectCurrentTodo);

  return (
    <>
      <Header />
      <Section>
        <Container>
          {/*<Text textAlign="center">Create your first todo😉</Text>*/}
          {!isEdit ? <Form /> : <EditForm />}
          <TodoList />
        </Container>
      </Section>
    </>
  );
};
