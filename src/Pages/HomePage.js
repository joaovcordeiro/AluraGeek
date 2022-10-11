import styled from "styled-components";
import Banner from "../Components/Banner/Banner";
import ProductSection from "../Components/Products/ProductSection";

function HomePage() {
  return (
    <HomePageContainer>
      <Banner />
      <ProductSection />
    </HomePageContainer>
  );
}

export default HomePage;

const HomePageContainer = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Inter:wght@300;400;700&display=swap");
  font-family: "Inter", sans-serif;

  overflow-x: hidden;
`;
