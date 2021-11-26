import { DataTypes } from "../../types/DataTypes";
import { AiOutlineCheck, AiOutlineClose } from "react-icons/ai";
import { CardItemStyled } from "./styles";

export const CardItem = ({
  temperatureA,
  temperatureB,
  statusA,
  statusB,
  statusC,
  statusD,
  statusE,
  statusF,
}: DataTypes) => {
  return (
    <>
      <CardItemStyled>
        <h4>Temperaturada do Painel</h4>
        <span>{temperatureA} ºC</span>
      </CardItemStyled>

      <CardItemStyled>
        <h4>Temperaturada do Transformador</h4>
        <span>{temperatureB}  ºC</span>
      </CardItemStyled>

      <CardItemStyled>
        <h4>Status do disjuntor QGFV</h4>
        <p>
          {statusA === 1 ? (
            <AiOutlineCheck className="check" />
          ) : (
            <AiOutlineClose className="not" />
          )}
        </p>
      </CardItemStyled>

      <CardItemStyled>
        <h4>Status do disjuntor QGFV</h4>
        <p>
          {statusB === 1 ? (
            <AiOutlineCheck className="check" />
          ) : (
            <AiOutlineClose className="not" />
          )}
        </p>
      </CardItemStyled>

      <CardItemStyled>
        <h4>Status do botão de emergência</h4>
        <p>
          {statusC === 1 ? (
            <AiOutlineCheck className="check" />
          ) : (
            <AiOutlineClose className="not" />
          )}
        </p>
      </CardItemStyled>

      <CardItemStyled>
        <h4>Status do botão</h4>
        <p>
          {statusD === 1 ? (
            <AiOutlineCheck className="check" />
          ) : (
            <AiOutlineClose className="not" />
          )}
        </p>
      </CardItemStyled>

      <CardItemStyled>
        <h4>Status Usina Gerando</h4>
        <p>
          {statusE === 1 ? (
            <AiOutlineCheck className="check" />
          ) : (
            <AiOutlineClose className="not" />
          )}
        </p>
      </CardItemStyled>

      <CardItemStyled>
        <h4>Status Falha</h4>
        <p>
          {statusF === 1 ? (
            <AiOutlineCheck className="check" />
          ) : (
            <AiOutlineClose className="not" />
          )}
        </p>
      </CardItemStyled>
    </>
  );
};
