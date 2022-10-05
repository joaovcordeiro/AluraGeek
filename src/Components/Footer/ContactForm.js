import styled from "styled-components";
import Button from "../Button/Button";
import Input from "../Input/Input";

function ContactForm() {
  function handleSubmit(e) {
    e.preventDefault();
  }
  return (
    <FormContainer onSubmit={(e) => handleSubmit}>
      <FormTitle>Fale conosco</FormTitle>
      <InputBox>
        <Input id="name" type="text"></Input>
        <FormLabel htmlFor="name">Nome</FormLabel>
      </InputBox>
      <FormText type="text" placeholder="Escreva sua mensagem"></FormText>
      <Button
        type="submit"
        background={"#2A7AE4"}
        border={"#2A7AE4"}
        color={"#FFF"}
        backgroundHover="#5595E9"
      >
        Enviar mensagem
      </Button>
    </FormContainer>
  );
}

export default ContactForm;

const FormContainer = styled.form`
  width: 100%;
  margin-bottom: 20px;
`;

const FormTitle = styled.h2`
  font-size: 1em;
  color: #464646;
  font-weight: 700;
`;

const InputBox = styled.div`
  position: relative;
  padding-top: 10px;
  margin-bottom: 10px;

  input {
    height: 56px;
    padding-top: 40px;
  }
`;

const FormLabel = styled.label`
  position: absolute;
  top: 18px;
  left: 10px;
  font-size: 12px;
  color: #a2a2a2;
`;

const FormText = styled.textarea`
  width: 100%;
  height: 82px;
  border: none;
  border-radius: 4px;
  border-bottom: 1px solid #c8c8c8;
  font-size: 1em;
  font-weight: 300;
  padding: 15px 10px 0 10px;
  margin-bottom: 10px;

  resize: none;
  &:focus {
    outline: none;
  }

  &::-webkit-scrollbar {
    display: none;
  }
`;
