import styled from "styled-components";

import { useNavigate, useLocation } from "react-router-dom";

import HeaderLogo from "../Logo/Logo";
import SearchBar from "./SearchBar";
import Button from "../Button/Button";

function Header() {
  const navigate = useNavigate();
  const locale = useLocation();
  const pathname = locale.pathname;

  function handleClick() {
    if (pathname === "/") {
      navigate("/login");
    } else {
      navigate("/products-home");
    }
  }

  return (
    <HeaderContainer>
      <HeaderLogo />
      <Button
        disabled={!pathname === "/" || !pathname === "/products"}
        visibility={
          pathname === "/" || pathname === "/products" ? "visible" : "hidden"
        }
        onClick={handleClick}
        border="#2A7AE4"
        color="#2A7AE4"
        background="#FFF"
        maxWidth="182px"
        minWidth="133px"
        backgroundHover="#D4E4FA"
      >
        {pathname === "/"
          ? "Login"
          : pathname === "/products"
          ? "Menu administrador"
          : ""}
      </Button>
      <SearchBar />
    </HeaderContainer>
  );
}

export default Header;

const HeaderContainer = styled.div`
  position: relative;
  max-width: 1136px;
  display: flex;
  margin: 0 auto;
  padding: 16px;
  justify-content: space-between;

  @media (min-width: 720px) {
    button {
      order: 3;
      margin-left: 7%;
    }
    padding: 16px 32px;
  }

  @media (min-width: 1100px) {
    padding: 32px 0;
  }
`;
