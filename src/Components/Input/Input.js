import styled from "styled-components";

function Input({ placeholder }) {
  return <InputContainer placeholder={placeholder}></InputContainer>;
}

export default Input;

const InputContainer = styled.input`
  width: 100%;
  font-size: 1em;
  padding: 15px 0 15px 10px;
  color: #464646;
  margin-bottom: 10px;
  border: none;
  border-radius: 4px;
  border-bottom: 1px solid #c8c8c8;

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: #a2a2a2;
  }
`;
