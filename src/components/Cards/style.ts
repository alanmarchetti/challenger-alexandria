import styled from "styled-components";

export const Card = styled.div`
  max-width: 90%;
  height: auto;

  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;

  margin: 0 auto;

  @media screen and (max-width: 985px) {
    display: flex;
    flex-direction: column;
  }
`;
