import { Container } from './Section.styled.js';

export const Section = ({ title, children }) => {
  return (
    <Container>
      <h1>{title}</h1>
      {children}
    </Container>
  );
};
