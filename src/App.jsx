import Container from './components/Container/Container';
import Header from './components/Header/Header';
import Section from './components/Section/Section';
import Form from './components/Form/Form.jsx';
import TodoList from './components/TodoList/TodoList.jsx';

export const App = () => {
  return (
    <>
      <Header />
      <Section>
        <Container>
          {/*<Text textAlign="center">Create your first todo😉</Text>*/}
          <Form />
          <TodoList />
        </Container>
      </Section>
    </>
  );
};
