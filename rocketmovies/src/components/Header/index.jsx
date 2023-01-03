import { Container, Profile, Rocket } from "./styles";
import { Input } from "../Input";

export function Header() {
  return (
    <Container>
      <Rocket>
        <h1>RocketMovies</h1>
      </Rocket>

      <div className="inputContainer">
        <Input placeholder="Pesquisar pelo título"></Input>
      </div>

      <Profile to="/profile">
        <div>
          <strong>Matheus Fonseca</strong>
          <span>sair</span>
        </div>
        <img src="https://github.com/matheusfsk.png" alt="Foto do usuário" />
      </Profile>
    </Container>
  );
}
