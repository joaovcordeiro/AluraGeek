import { useState } from "react";
import { useNavigate } from "react-router-dom";

import styled from "styled-components";
import Input from "../Input/Input";
import Button from "../Button/Button";

function LoginForm() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("admin@gmail.com");
  const [password, setPassword] = useState("123456");

  function handleSubmit(e) {
    e.preventDefault();
    if (email === "admin@gmail.com" && password === "123456") {
      navigate("/products-home");
    }
  }

  return (
    <FormContainer>
      <Form>
        <Tittle>Iniciar Sessão</Tittle>
        <Input
          placeholder="Escreva seu email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></Input>
        <Input
          placeholder="Escreva sua senha"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></Input>
        <Button
          maxWidth={"100%"}
          background={"#2A7AE4"}
          border={"#2A7AE4"}
          color={"#FFF"}
          backgroundHover="#5595E9"
          height="50px"
          onClick={(e) => handleSubmit(e)}
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
