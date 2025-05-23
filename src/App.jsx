import Container from './components/Container/Container';
import Header from './components/Header/Header';
import Section from './components/Section/Section';
import Text from './components/Text/Text';
import Form from './components/Form/Form.jsx';

export const App = () => {
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
