import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { DataTypes } from "../../types/DataTypes";

// - components
import { Cards } from "../../components/Cards";
import { Pagination } from "../../components/Pagination";
import { Button } from "../../components/Button";
import { CardItem } from "../../components/CardItem";

// - service
import { loadUsers } from "../../service/data";

import { DetailsWrapper, Container } from "./styles";
import { useId } from "react-id-generator";

export const Details = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [loading, setLoading] = useState(true);
  const [htmlId] = useId();

  // -- dados api
  const loadUse = async () => {
    const datas = await loadUsers("desafio_01");
    setData(datas);
    setLoading(false);
  };

  // -- paginação
  const itensPerPage = 1;
  const pages = Math.ceil(data.length / itensPerPage);
  const startIndex = currentPage * itensPerPage;
  const endIndex = startIndex + itensPerPage;
  const currentIndex = data.slice(startIndex, endIndex);

  useEffect(() => {
    loadUse();
  }, []);

  return (
    <DetailsWrapper>
      {loading === false ? (
        <Container>
          <header>
            <h2>Detalhes</h2>
            <Button>
              <Link to="/">Menu principal</Link>
            </Button>
          </header>
          <main>
            {currentIndex?.map((response: DataTypes) => (
              <Cards key={htmlId}>
                <CardItem
                  temperatureA={response.temperatureA}
                  temperatureB={response.temperatureB}
                  statusA={response.statusA}
                  statusB={response.statusB}
                  statusC={response.statusC}
                  statusD={response.statusD}
                  statusE={response.statusE}
                  statusF={response.statusF}
                />
              </Cards>
            ))}
            <Pagination pages={pages} handleNextPage={setCurrentPage} />
          </main>
        </Container>
      ) : (
        "Carregando dados...."
      )}
    </DetailsWrapper>
  );
};
