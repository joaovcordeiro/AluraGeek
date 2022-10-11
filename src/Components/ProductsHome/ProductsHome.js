import styled from "styled-components";
import Button from "../Button/Button";
import Product from "../Products/Product";
import { useNavigate } from "react-router-dom";
import products from "../../Data/data";

function ProductsHome() {
  const navigate = useNavigate();
  function handleClick() {
    navigate("/products");
  }
  return (
    <Container>
      <ProductsContainer>
        <ProductsHeader>
          <ProductsTittle>Todos os produtos</ProductsTittle>
          <Button
            background={"#2A7AE4"}
            border={"#2A7AE4"}
            color={"#FFF"}
            onClick={handleClick}
            backgroundHover="#5595E9"
          >
            Adicionar produto
          </Button>
        </ProductsHeader>
        <Products>
          {products.map((product, index) => (
            <Product key={product.id} product={product} />
          ))}
        </Products>
      </ProductsContainer>
    </Container>
  );
}

export default ProductsHome;

const Container = styled.div`
  width: 100vw;
  background-color: #f5f5f5;
  padding: 60px 0;
`;

const ProductsContainer = styled.div`
  max-width: 1136px;
  margin: 0 auto;

  @media (max-width: 1136px) {
    padding: 0 32px;
  }
`;

const ProductsHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
`;

const ProductsTittle = styled.h1`
  font-size: 32px;
  color: #545454;
`;

const Products = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  margin-top: 15px;
  row-gap: 60px;
`;
