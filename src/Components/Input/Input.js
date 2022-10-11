import styled from "styled-components";

function Input(props) {
  return <InputContainer {...props}></InputContainer>;
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
  height: 56px;

  &:focus {
    outline: none;
    box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
      rgba(0, 0, 0, 0.22) 0px 15px 12px;
    transition: 0.3s;
  }

  &::placeholder {
    color: #a2a2a2;
  }
`;
