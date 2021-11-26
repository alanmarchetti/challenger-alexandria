import styled from "styled-components";

export const CardItemStyled = styled.div`
  width: 200px;
  height: 200px;
  margin: 10px;
  text-align: center;
  border-radius: 3px;
  border: 1px solid #e1e4eb;
  background-color: #e1e4eb;
  -webkit-box-shadow: 5px 6px 17px -5px #000000;
  box-shadow: 5px 6px 17px -5px #000000;

  h4 {
    color: #2f4555;
    padding: 30px 8px;
  }

  span {
    font-weight: bold;
    color: #4c5f6e;
    font-size: 25px;
  }

  svg {
    font-size: 35px;
  }

  .check {
    color: green;
  }

  .not {
    color: red;
  }
`;
