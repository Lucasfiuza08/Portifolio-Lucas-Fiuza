import { Link, NavLink } from "react-router";
import "./styles/Header.css";

function Header(){
  return(
    <header className="cabecalho">
      <Link to="/" className="cabecalho-marca">
        <span className="cabecalho-voltar"> Base</span>
        <span className="cabecalho-nome">Agente Lucas Fiúza</span>
      </Link>
      <nav>
        <NavLink to="/sobremim">Sobre mim</NavLink>
        <NavLink to="/projetos">Projetos</NavLink>
        <NavLink to="/experiencias">Experiências</NavLink>
        <NavLink to="/contato">Contato</NavLink>
      </nav>
    </header>
  );
}

export default Header;