import { Link } from "react-router";

function Header(){
  return(
    <header>
      <nav>
        <p><Link to="sobremim">Sobre mim</Link></p>
        <p><Link to="projetos">Projetos</Link></p>
        <p><Link to="experiencias">Experiências</Link></p>
        <p><Link to="contato">Links para contato</Link></p>
      </nav>
    </header>
  );
}

export default Header;