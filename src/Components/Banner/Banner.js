import styled from "styled-components";
import bannerBG from "../../assets/images/banner-image.jpg";
import Button from "../Button/Button";

function Banner() {
  return (
    <BannerContainer>
      <BannerShadow />
      <InfoContainer>
        <BannerTittle>Dezembro Promocional</BannerTittle>
        <BannerDescription>
          Produtos selecionados com 33% de desconto
        </BannerDescription>
        <Button
          background="#2A7AE4"
          border="#2A7AE4"
          color="#fff"
          backgroundHover="#5595E9"
        >
          Ver Consoles
        </Button>
      </InfoContainer>
    </BannerContainer>
  );
}

export default Banner;

const BannerContainer = styled.div`
  position: relative;
  background-image: url(${bannerBG});
  width: 100vw;
  height: 14em;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  @media (min-width: 700px) {
    height: 24.5em;
  }
`;

const BannerImage = styled.img`
  width: 100%;
  height: 14em;
`;

const BannerTittle = styled.h1`
  font-size: 1.37em;
  margin-bottom: 8px;

  @media (min-width: 700px) {
    font-size: 3.25em;
    margin-bottom: 30px;
  }
`;

const BannerDescription = styled.p`
  font-size: 0.875em;
  margin-bottom: 16px;

  @media (min-width: 700px) {
    font-size: 1.375em;
  }
`;

const InfoContainer = styled.div`
  position: absolute;
  bottom: 0;
  color: #fff;
  padding: 16px;

  @media (min-width: 700px) {
    padding: 32px;
  }

  @media (min-width: 1100px) {
    padding: 32px calc((100vw - 1136px) / 2);
  }
`;

const BannerShadow = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background: linear-gradient(to top, #000000 0%, rgba(0, 0, 0, 0) 60%);
  width: 100%;
  height: 100%;
`;
