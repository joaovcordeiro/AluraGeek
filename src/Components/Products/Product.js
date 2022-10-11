import styled from "styled-components";
import { useLocation, useNavigate } from "react-router-dom";
import { IoMdTrash } from "react-icons/io";
import { RiPencilFill } from "react-icons/ri";

function Product({ product }) {
  const navigate = useNavigate();
  const location = useLocation();
  const pathname = location.pathname;

  function handleClick() {
    navigate(`/product/${product.id}`);
  }

  return (
    <Container onClick={handleClick}>
      <ProductLayout>
        <ProductImage src={product.image} />
        <ProductHeader
          display={pathname === "/products-home" ? "flex" : "none"}
        >
          <DeleteButton />
          <EditButton />
        </ProductHeader>
      </ProductLayout>
      <Title>{product.name}</Title>
      <Price>R$ {product.price},00</Price>
      <Link display={pathname === "/products-home" ? "none" : "block"}>
        Ver produto
      </Link>
      <Id display={pathname === "/products-home" ? "block" : "none"}>
        #{product.id}
      </Id>
    </Container>
  );
}

export default Product;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 0 135px;
  max-width: 174px;
  gap: 10px;
  cursor: pointer;

  @media (min-width: 1136px) {
    flex-basis: 174px;
  }

  @media (min-width: 768px) {
    flex-basis: 155px;
  }
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
  display: ${(props) => props.display};
  font-size: 16px;
  font-weight: 700;
  color: #2a7ae4;
  cursor: pointer;
`;

const Id = styled.p`
  font-size: 14px;
  display: ${(props) => props.display};
`;

const ProductLayout = styled.div`
  position: relative;
`;

const ProductHeader = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  display: ${(props) => props.display};
  gap: 10px;
  padding: 8px;
`;

const DeleteButton = styled(IoMdTrash)`
  font-size: 25px;
  color: #fff;

  &hover {
    color: #2a7ae4;
  }
`;

const EditButton = styled(RiPencilFill)`
  color: #fff;
  font-size: 25px;
`;
