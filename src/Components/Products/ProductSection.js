import styled from "styled-components";
import products from "../../Data/data";
import Products from "./Products";

function ProductSection() {
  return (
    <Container>
      {products.map((product, index) => (
        <Products key={index} product={product} />
      ))}
    </Container>
  );
}

export default ProductSection;

const Container = styled.main``;
