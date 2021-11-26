import styled from "styled-components";

export const HomeWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;

  background-image: linear-gradient(
    to bottom,
    #5e518f,
    #924f91,
    #c04b82,
    #e05266,
    #ed6a42
  );

  .container-img {
    flex: 2;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      max-width: 60%;
    }
  }

  .container-actions {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #fbeaff;
    -webkit-box-shadow: -6px -1px 12px 1px rgba(0, 0, 0, 0.7);
    box-shadow: -6px 0px 12px 0px rgba(0, 0, 0, 0.7);

    h1 {
      font-size: 45px;
      color: #5e518f;
      margin-bottom: 25px;
    }

    p {
        font-size: 18px;
    }
  }

  .content-actions {
    width: 70%;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;

    button {
      width: 185px;
      height: 42px;
      border: none;
      outline: 0;
      border: 1px solid #3f3d56;
      border-radius: 3px;
      background-color: #5e518f;
      transition: ease-in-out .4s;
    }

    button:hover {
     background-color: #3f3d56;
     border: 1px solid #5e518f;
    }
  }

  @media screen and (max-width: 1700px) {
    .content-actions {
        width: 90%;
    }
  }

  @media screen and (max-width: 1350px) {
    .content-actions {
      button {
        width: 150px;
      }
    }
  }

  @media screen and (max-width: 1100px) {
    .container-actions {
      h1 {
        font-size: 40px;
      }
      p {
          text-align: center;
      }
    }

    .content-actions {
      flex-direction: column;
      height: 120px;
      margin-top: 25px;

      button {
        width: 185px;
      }
    }

    @media screen and (max-width: 680px) {
      .container-img {
        display: none;

        img {
          display: none;
        }
      }
      .content-actions {
        button {
          width: 200px;
        }
      }
    }
  }
`;
