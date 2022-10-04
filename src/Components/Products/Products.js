import styled from "styled-components";
import Product from "./Product";
import { AiOutlineArrowRight } from "react-icons/ai";

function Products({ product }) {
  const tittle = Object.keys(product)[0];
  const formatedTittle = tittle.replace("_", " ");
  return (
    <Container>
      <TittleContainer>
        <Title>{formatedTittle}</Title>
        <LinkContainer>
          <Link>Ver tudo</Link>
          <LinkIcon />
        </LinkContainer>
      </TittleContainer>
      <ProductsContainer>
        {product[tittle].map((item, index) => (
          <Product key={index} product={item} />
        ))}
      </ProductsContainer>
    </Container>
  );
}

export default Products;

const Container = styled.div`
  max-width: 1136px;
  margin: 0 auto;
  margin-top: 50px;

  @media (max-width: 768px) {
    max-width: 710px;
  }

  @media (max-width: 1136px) {
    max-width: calc(100% - 64px);
  }
`;

const Title = styled.h2`
  font-size: 32px;
  font-weight: 700;
  color: #464646;
`;

const Link = styled.a``;

const LinkIcon = styled(AiOutlineArrowRight)`
  font-size: 20px;
`;

const LinkContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 16px;
  font-weight: 700;
  color: #2a7ae4;
  cursor: pointer;
`;

const TittleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 15px;
`;

const ProductsContainer = styled.div`
  display: flex;
  align-items: flex-start;
  overflow-x: scroll;
  flex-wrap: nowrap;
  max-height: 510px;
  overflow-y: hidden;
  gap: 16px;

  @media (max-width: 500px) {
    flex-wrap: wrap;
  }

  &::-webkit-scrollbar {
    display: none;
  }
`;
