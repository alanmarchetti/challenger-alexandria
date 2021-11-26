import styled from "styled-components";


export const GraphicsWrapper = styled.div` 
    width: 100%;
    height: 100vh;
  
    display: flex;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: 1199px) {
    height: 100vh;
  }
`;


export const Container = styled.div`
    width: 1200px;
    height: 600px;
   
    display: flex;
    flex-direction: column;
    -webkit-box-shadow: 0px 1px 15px 5px rgba(0,0,0,0.58); 
    box-shadow: 0px 1px 15px 5px rgba(0,0,0,0.58);

    header {
    width: 100%;
    height: 70px;

    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 50px;

    h2 {
      padding-left: 10px;
      font-size: 30px;
      padding-top: 10px;
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
      margin-top: 10px;
    }


    @media screen and (max-width: 1199px) {
        width: 100%;
        height: auto;
      
        display: flex;
        flex-direction: column;
        
        h2 {
           padding-bottom: 20px;
        }
    }
    
}

`