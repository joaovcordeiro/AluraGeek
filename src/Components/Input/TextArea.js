import styled from "styled-components";

function TextArea(props) {
  return <FormText {...props}></FormText>;
}

export default TextArea;

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

  &:focus {
    box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
      rgba(0, 0, 0, 0.22) 0px 15px 12px;
    transition: 0.3s;
  }

  resize: none;
  &:focus {
    outline: none;
  }

  &::-webkit-scrollbar {
    display: none;
  }
`;
