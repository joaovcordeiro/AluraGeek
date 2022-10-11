import styled from "styled-components";
import Button from "../Button/Button";
import Input from "../Input/Input";
import TextArea from "../Input/TextArea";

function ContactForm() {
  function handleSubmit(e) {
    e.preventDefault();
  }
  return (
    <FormContainer onSubmit={(e) => handleSubmit(e)}>
      <FormTitle>Fale conosco</FormTitle>
      <InputBox>
        <Input id="name" type="text"></Input>
        <FormLabel htmlFor="name">Nome</FormLabel>
      </InputBox>
      <TextArea placeholder="Escreva sua mensagem" />
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
