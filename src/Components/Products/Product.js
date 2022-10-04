import styled from "styled-components";

function Product({ product }) {
  return (
    <Container>
      <ProductImage src={product.image} />
      <Title>{product.name}</Title>
      <Price>R$ {product.price},00</Price>
      <Link>Ver produto</Link>
    </Container>
  );
}

export default Product;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  min-width: 146px;
  max-width: 176px;
  gap: 7px;
  cursor: pointer;
`;

const ProductImage = styled.img`
  width: 100%;
  background-size: contain;
  max-height: 176px;
  min-height: 176px;
  object-fit: cover;
`;

const Title = styled.p`
  font-size: 14px;
  color: #464646;
`;

const Price = styled.p`
  font-size: 16px;
  font-weight: 700;
  color: #464646;
`;

const Link = styled.a`
  font-size: 16px;
  font-weight: 700;
  color: #2a7ae4;
  cursor: pointer;
`;
