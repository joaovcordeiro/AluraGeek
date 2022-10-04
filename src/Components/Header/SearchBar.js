import styled from "styled-components";

function SearchBar() {
  return (
    <SearchBarContainer>
      <SearchBarInput placeholder="O que deseja encontrar?" />
      <SearchBarIcon
        width="24"
        height="24"
        viewBox="0 0 18 18"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M12.4999 11.5H11.7099L11.4299 11.23C12.6299 9.83002 13.2499 7.92002 12.9099 5.89002C12.4399 3.11002 10.1199 0.890015 7.31989 0.550015C3.08989 0.0300153 -0.470107 3.59001 0.0498932 7.82001C0.389893 10.62 2.60989 12.94 5.38989 13.41C7.41989 13.75 9.32989 13.13 10.7299 11.93L10.9999 12.21V13L15.2499 17.25C15.6599 17.66 16.3299 17.66 16.7399 17.25C17.1499 16.84 17.1499 16.17 16.7399 15.76L12.4999 11.5ZM6.49989 11.5C4.00989 11.5 1.99989 9.49002 1.99989 7.00002C1.99989 4.51002 4.00989 2.50002 6.49989 2.50002C8.98989 2.50002 10.9999 4.51002 10.9999 7.00002C10.9999 9.49002 8.98989 11.5 6.49989 11.5Z" />
      </SearchBarIcon>
    </SearchBarContainer>
  );
}

export default SearchBar;

const SearchBarContainer = styled.div`
  position: relative;
  max-width: 393px;
  display: flex;
  align-items: center;
`;

const SearchBarInput = styled.input`
  border: none;
  background: #f5f5f5;
  border-radius: 20px;
  display: none;
  width: 272px;
  margin-left: -130px;
  padding: 8px 16px;
  height: 40px;

  &::placeholder {
    color: #a2a2a2;
  }
  &:focus {
    outline: none;
  }

  @media (min-width: 720px) {
    display: block;
  }

  @media (min-width: 1100px) {
    width: 393px;
    margin-left: -300px;
  }
`;

const SearchBarIcon = styled.svg`
  right: 12px;
  align-self: center;
  cursor: pointer;
  fill: #464646;
  @media (min-width: 720px) {
    position: absolute;
    right: 16px;
    fill: #a2a2a2;
  }
`;
