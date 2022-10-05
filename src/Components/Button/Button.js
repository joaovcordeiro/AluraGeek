import styled from "styled-components";

function Button({ children, ...props }) {
  return <ButtonContainer {...props}>{children}</ButtonContainer>;
}

export default Button;

const ButtonContainer = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.color};
  border: 1px solid ${(props) => props.border};
  background: ${(props) => props.background};
  min-width: ${(props) => props.minWidth};
  height: ${(props) => props.height};
  cursor: pointer;
  font-size: 16px;
  padding: 12px 16px;
  visibility: ${(props) => props.visibility};
  &:hover {
    background: ${(props) => props.backgroundHover};
    transition: 0.3s;
  }

  &:active {
    transform: scale(0.95);
    box-shadow: 3px 2px 22px 1px rgba(42, 122, 228, 0.3);
    transition: 0.1s;
  }

  @media (min-width: 1100px) {
    width: ${(props) => props.maxWidth};
  }
`;
