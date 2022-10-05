import styled from "styled-components";
import Input from "../Input/Input";
import Button from "../Button/Button";

function LoginForm() {
  return (
    <FormContainer>
      <Form>
        <Tittle>Iniciar Sessão</Tittle>
        <Input placeholder="Escreva seu email"></Input>
        <Input placeholder="Escreva sua senha"></Input>
        <Button
          maxWidth={"100%"}
          background={"#2A7AE4"}
          border={"#2A7AE4"}
          color={"#FFF"}
          backgroundHover="#5595E9"
          height="50px"
        >
          Entrar
        </Button>
      </Form>
    </FormContainer>
  );
}

export default LoginForm;

const FormContainer = styled.div`
  width: 100vw;
  height: 100%;
  background-color: #f5f5f5;
  padding: 70px 0;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  max-width: 315px;
  margin: 0 auto;

  button {
    width: 40%;
    height: 40px;
  }

  @media (min-width: 1100px) {
    max-width: 430px;

    button {
      width: 100%;
    }
  }
`;

const Tittle = styled.h1`
  margin-bottom: 10px;
  color: #575757;
`;
