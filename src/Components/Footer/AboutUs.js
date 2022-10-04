import styled from "styled-components";

function AboutUs() {
  return (
    <Container>
      <Paragraph>Quem somos nós</Paragraph>
      <Paragraph>Politica de privacidade</Paragraph>
      <Paragraph>Programa fidelidade</Paragraph>
      <Paragraph>Nossas lojas</Paragraph>
      <Paragraph>Quero ser franqueado</Paragraph>
      <Paragraph>Anuncie aqui</Paragraph>
    </Container>
  );
}

export default AboutUs;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  align-items: center;
  margin-top: 30px;
  @media (min-width: 768px) {
    align-items: flex-start;
    gap: 30px;
  }

  @media (min-width: 1100px) {
    margin-top: 0;
  }
`;

const Paragraph = styled.p`
  font-size: 1em;
  color: #464646;
`;
