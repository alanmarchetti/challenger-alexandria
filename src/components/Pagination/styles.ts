import styled from "styled-components";

export const PaginationWrapper = styled.div`
  width: 90%;
  height: 56px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin: 10px;

  button {
    border: 1px solid #5e518f;
    padding: 8px 16px;
    margin: 0 3px;
    border-radius: 2px;
    cursor: pointer;
    transition: ease-in-out 0.4s;
    background-color: #5e518f;
    color: #fff;
  }

  @media screen and (max-width: 985px) {
    width: 100%;
    margin: 0;
  }

  @media screen and (max-width: 500px) {
    button {
      padding: 6px 12px;
    }
  }
`;
