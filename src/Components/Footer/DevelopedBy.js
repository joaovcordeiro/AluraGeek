import styled from "styled-components";

function DevelopedBy() {
  return (
    <Container>
      <Paragraph>
        Desenvolvido por João Araujo <br></br>2022
      </Paragraph>
    </Container>
  );
}

export default DevelopedBy;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 102px;
  background-color: #fff;
`;

const Paragraph = styled.p`
  color: #464646;
  text-align: center;
  line-height: 1.2;
`;
