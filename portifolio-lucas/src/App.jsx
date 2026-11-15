function Header(){
  return(
    <header>
      <nav>
        <a href="">Sobre mim</a>
        <a href="">Projetos</a>
        <a href="">Experiências</a>
        <a href="">Links para contato</a>
      </nav>
    </header>
  );
}
function App(){
  return(
  <>
    <h1>Lucas Fiúza Almeida</h1>
    {Header()};
  </>
  );
}


export default App;