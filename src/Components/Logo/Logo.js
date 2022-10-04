import styled from "styled-components";
import logoController from "../../assets/images/controller.svg";
import { useNavigate } from "react-router-dom";

function HeaderLogo({ width }) {
  const navigate = useNavigate();
  function handleClick() {
    navigate("/");
  }

  return (
    <LogoContainer width={width} onClick={handleClick}>
      <LogoImage width={width} src={logoController}></LogoImage>
      <AluraLogo>Alura</AluraLogo>
      <GeekLogo>Geek</GeekLogo>
    </LogoContainer>
  );
}

export default HeaderLogo;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
  cursor: pointer;
  font-size: calc(0.9rem + ${(props) => props.width});

  @media (min-width: 1100px) {
    font-size: calc(1.2rem + ${(props) => props.width});
  }
`;

const LogoImage = styled.img`
  width: calc(40px + ${(props) => props.width});

  @media (max-width: 1100px) {
    width: calc(22 + ${(props) => props.width});
  }
`;

const AluraLogo = styled.span`
  color: #2a7ae4;
  margin-left: 5px;
`;

const GeekLogo = styled.span`
  color: #464646;
  flex: 0 1 40px;
`;
