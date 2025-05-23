import Container from './components/Container/Container';
import Header from './components/Header/Header';
import Section from './components/Section/Section';
import Text from './components/Text/Text';
import Form from './components/Form/Form.jsx';
import { useDispatch } from 'react-redux';

export const App = () => {
  const dispatch = useDispatch();
  return (
    <>
      <Header />
      <Section>
        <Container>
          <Form />
          <Text textAlign="center">Create your first todo😉</Text>
        </Container>
      </Section>
    </>
  );
};
