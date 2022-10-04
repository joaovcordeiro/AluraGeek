import styled from "styled-components";
import HeaderLogo from "../Logo/Logo";
import SearchBar from "./SearchBar";
import Button from "../Button/Button";

function Header() {
  return (
    <HeaderContainer>
      <HeaderLogo />
      <Button
        border="#2A7AE4"
        color="#2A7AE4"
        background="#FFF"
        maxWidth="182px"
        minWidth="133px"
        backgroundHover="#D4E4FA"
      >
        Login
      </Button>
      <SearchBar />
    </HeaderContainer>
  );
}

export default Header;

const HeaderContainer = styled.div`
  max-width: 1136px;
  display: flex;
  margin: 0 auto;
  padding: 16px;
  justify-content: space-between;

  @media (min-width: 720px) {
    button {
      order: 3;
    }
    padding: 16px 32px;
  }

  @media (min-width: 1100px) {
    padding: 32px 0;
  }
`;

const LeftContainer = styled.div`
  display: flex;
  max-width: 440px;
`;
