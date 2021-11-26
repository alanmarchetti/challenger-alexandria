import { Link } from "react-router-dom";
import { Button } from "../../components/Button";

import { HomeWrapper } from "./styles";
import imgLogo from "../../img/logo-2.svg";

export const Home = () => {
  return (
    <HomeWrapper>
      <div className="container-img">
        <img src={imgLogo} alt="Logo" />
      </div>
      <div className="container-actions">
        <h1>Bem vindo(a)!</h1>
        <p>Tenha acesso aos detalhes ou acesso o gráfico</p>
        <div className="content-actions">
          <Button>
            <Link to="/desafio_01">Acesse os cards</Link>
          </Button>
          <Button>
            <Link to="/desafio_02">Acesse o gráfico</Link>
          </Button>
        </div>
      </div>
    </HomeWrapper>
  );
};
