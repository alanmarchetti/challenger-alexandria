import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  BarChart,
  Bar,
  ResponsiveContainer,
} from "recharts";

import { loadUsers } from "../../service/data";
import { Container, GraphicsWrapper } from "./styles";
import { Button } from "../../components/Button";

export const Graphics = () => {
  const [data, setData] = useState([]);

  const loadUse = async () => {
    const datas = await loadUsers("desafio_02");
    setData(datas);
  };

  useEffect(() => {
    loadUse();
  }, []);

  return (
    <GraphicsWrapper>
      <Container>
        <header>
          <h2>Gráficos</h2>
          <Button>
            <Link to="/">Menu principal</Link>
          </Button>
        </header>
        <ResponsiveContainer width="90%" aspect={3}>
          <BarChart data={data} width={500} height={100}>
            <XAxis dataKey="date" />
            <YAxis dataKey="consume" />
            <Tooltip />
            <Legend />
            <Bar dataKey="generation" fill="#2b2a3d" />
            <Bar dataKey="consume" fill="#5e518f" />
            <Bar dataKey="temperature" fill="#342ea8" />
          </BarChart>
        </ResponsiveContainer>
      </Container>
    </GraphicsWrapper>
  );
};
