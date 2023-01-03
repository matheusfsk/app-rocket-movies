import { FiPlus, FiStar } from "react-icons/fi";
import { Container, NewNote, DivHeader, DivMain } from "./styles";

import { Header } from "../../components/Header";
import { Tag } from "../../components/Tag";

export function Home() {
  return (
    <Container>
      <Header />
      <DivHeader>
        <header>
          <h1>Meus filmes</h1>
          <NewNote to="/new">
            <FiPlus />
            Adicionar filme
          </NewNote>
        </header>
      </DivHeader>
      <main>
        <DivMain>
          <h2>Interestellar</h2>
          <div className="stars">
            <FiStar />
            <FiStar />
            <FiStar />
            <FiStar />
            <FiStar />
          </div>
          <p>
            Pragas nas colheitas fizeram a civilização humana regredir para uma
            sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto
            da NASA, tem uma fazenda com sua família. Murphy, a filha de dez
            anos de Cooper, acredita que seu quarto está assombrado por um
            fantasma que tenta se...
          </p>
          <div className="tags">
            <Tag title="Ficção Científica" />
            <Tag title="Drama" />
            <Tag title="Família" />
          </div>
        </DivMain>
        <DivMain>
          <h2>Interestellar</h2>
          <div className="stars">
            <FiStar />
            <FiStar />
            <FiStar />
            <FiStar />
            <FiStar />
          </div>
          <p>
            Pragas nas colheitas fizeram a civilização humana regredir para uma
            sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto
            da NASA, tem uma fazenda com sua família. Murphy, a filha de dez
            anos de Cooper, acredita que seu quarto está assombrado por um
            fantasma que tenta se...
          </p>
          <div className="tags">
            <Tag title="Ficção Científica" />
            <Tag title="Drama" />
            <Tag title="Família" />
          </div>
        </DivMain>
        <DivMain>
          <h2>Interestellar</h2>
          <div className="stars">
            <FiStar />
            <FiStar />
            <FiStar />
            <FiStar />
            <FiStar />
          </div>
          <p>
            Pragas nas colheitas fizeram a civilização humana regredir para uma
            sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto
            da NASA, tem uma fazenda com sua família. Murphy, a filha de dez
            anos de Cooper, acredita que seu quarto está assombrado por um
            fantasma que tenta se...
          </p>
          <div className="tags">
            <Tag title="Ficção Científica" />
            <Tag title="Drama" />
            <Tag title="Família" />
          </div>
        </DivMain>
      </main>
    </Container>
  );
}
