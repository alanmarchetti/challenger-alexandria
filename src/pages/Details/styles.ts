import styled from "styled-components";

export const DetailsWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 985px) {
    height: 100%;
  }
`;

export const Container = styled.div`
  max-width: 1200px;
  height: auto;

  display: flex;
  flex-direction: column;
  align-items: center;
  -webkit-box-shadow: 0px 1px 15px 5px rgba(0,0,0,0.58); 
  box-shadow: 0px 1px 15px 5px rgba(0,0,0,0.58);

  header {
    width: 100%;
    height: 70px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    h2 {
      padding-left: 10px;
      font-size: 30px;
      color: #5e518f;
    }

    button {
      width: 165px;
      height: 38px;
      border: none;
      outline: 0;
      border: 1px solid #3f3d56;
      border-radius: 3px;
      background-color: #5e518f;
      cursor: pointer;
      margin-right: 10px;
    }
  }

  @media screen and (max-width: 1900px) {
    margin: 0 10px;
  }
  

  @media screen and (max-width: 1050px) {
    header {
      justify-content: space-around;
    }
  }

  @media screen and (max-width: 985px) {
    main {
      display: flex;
      flex-direction: column;
      height: auto;
    }
  }

  
`;
