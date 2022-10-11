import styled from "styled-components";
import products from "../../Data/data";
import Products from "./Products";

function ProductSection() {
  let categories = [];

  function getAllCategories() {
    products.forEach((product) => {
      if (categories[product.category]) {
        categories[product.category].push(product);
      } else {
        categories[product.category] = [product];
      }
    });
  }

  getAllCategories();
  return (
    <Container>
      {Object.keys(categories).map((category, index) => (
        <Products key={index} product={{ [category]: categories[category] }} />
      ))}
    </Container>
  );
}

export default ProductSection;

const Container = styled.main`
  width: 100vw;
  margin-bottom: 70px;
`;
