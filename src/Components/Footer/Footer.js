import styled from "styled-components";
import Logo from "../Logo/Logo.js";
import AboutUs from "./AboutUs.js";
import ContactForm from "./ContactForm.js";
import DevelopedBy from "./DevelopedBy.js";

function Footer() {
  return (
    <Container>
      <FooterContainer>
        <LeftContainer>
          <LogoContainer>
            <Logo width={"7px"} />
          </LogoContainer>
          <AboutUs />
        </LeftContainer>
        <ContactForm />
      </FooterContainer>
      <DevelopedBy />
    </Container>
  );
}

export default Footer;

const Container = styled.div`
  width: 100%;
  background-color: #eaf2fd;
  margin-top: 70px;
`;

const FooterContainer = styled.footer`
  max-width: calc(100% - 32px);
  min-width: calc(100% - 32px);
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding-top: 30px;

  @media (min-width: 768px) {
    flex-direction: row;
    gap: 100px;
    max-width: calc(100% - 64px);
    min-width: calc(100% - 64px);
    margin-bottom: 30px;
  }

  @media (min-width: 1100px) {
    max-width: 1136px;
    min-width: 1136px;
    padding: 70px 0 50px 0;
  }
`;

const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 30px;
  @media (min-width: 768px) {
    width: 40%;
    margin-top: 10px;
    align-items: flex-start;
  }

  @media (min-width: 1100px) {
    min-width: 41%;
    flex-direction: row;
    align-items: flex-start;
    gap: 100px;
    margin-top: 0;
  }
`;

const LogoContainer = styled.div`
  @media (min-width: 1100px) {
    margin-top: 10px;
  }
`;
