import styled from "styled-components";
import LoginForm from "../Components/LoginForm/LoginForm";

function LoginPage() {
  return (
    <LoginPageContainer>
      <LoginForm />
    </LoginPageContainer>
  );
}

export default LoginPage;

const LoginPageContainer = styled.div`
  overflow-x: hidden;
`;
