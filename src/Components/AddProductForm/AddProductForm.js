import styled from "styled-components";
import Input from "../Input/Input";
import TextArea from "../Input/TextArea";
import Button from "../Button/Button";

function AddProductForm() {
  function handleSubmit(e) {
    e.preventDefault();
  }
  return (
    <Container>
      <FormContainer onSubmit={handleSubmit}>
        <FormTitle>Adicionar novo produto</FormTitle>
        <Form>
          <InputBox>
            <InputLabel>URL da imagem</InputLabel>
            <Input />
          </InputBox>
          <InputBox>
            <InputLabel>Categoria</InputLabel>
            <Input />
          </InputBox>
          <InputBox>
            <InputLabel>Nome do produto</InputLabel>
            <Input />
          </InputBox>
          <InputBox>
            <InputLabel>Preço do produto</InputLabel>
            <Input></Input>
          </InputBox>

          <TextArea placeholder="Descrição do produto"></TextArea>
          <Button
            type="submit"
            background={"#2A7AE4"}
            border={"#2A7AE4"}
            color={"#FFF"}
            backgroundHover="#5595E9"
          >
            Adicionar produto
          </Button>
        </Form>
      </FormContainer>
    </Container>
  );
}

export default AddProductForm;

const Container = styled.div`
  width: 100vw;
  background-color: #f5f5f5;
`;

const FormContainer = styled.div`
  max-width: 100%;
  margin: 0 auto;
  padding: 16px 16px 32px 16px;

  @media (min-width: 768px) {
    padding: 32;
  }

  @media (min-width: 1100px) {
    max-width: 560px;
    padding: 64px 0 64px 0;
  }

  button {
    width: 100%;
  }
`;

const FormTitle = styled.h1`
  margin-bottom: 16px;
  font-size: 22px;
  color: #464646;

  @media (min-width: 1100px) {
    font-size: 32px;
  }
`;

const Form = styled.form`
  div:nth-child(5) {
    label {
      font-size: 16px;
      top: 16px;
    }
  }
`;

const InputBox = styled.div`
  position: relative;

  input {
    padding-top: 40px;
  }
`;

const InputLabel = styled.label`
  position: absolute;
  font-size: 12px;
  color: #a2a2a2;
  top: 8px;
  left: 12px;
`;
