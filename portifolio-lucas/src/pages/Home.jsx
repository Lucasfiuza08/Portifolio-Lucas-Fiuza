import { Link } from "react-router";
import { useState } from "react";
import notebook from "../assets/notebook.webp"
import "../styles/Home.css"

const assuntos = {
    sobremim: {
        frase:"Operação Identidade" ,
        titulo: "Sobre mim",
        descricao: "Quem eu sou, de onde vim e o equipamento que levo para cada missão.", 
    },
    projetos: {
        frase:"Operação Arquivos" ,
        titulo: "Projetos",
        descricao: "Cada projeto como uma operação, da mais antiga à mais recente.", 
    },
    experiencias: {
        frase:"Histórico de serviço" ,
        titulo: "Experiências",
        descricao: "Por onde passei e o que cada missão me ensinou.",
    },
    contato: {
    
        frase:"Linha Segura" ,
        titulo: "Contato",
        descricao: "Um canal criptografado aberto. Mande sua mensagem.",
    },
};


function Home(){
    const [assunto, setAssunto] = useState ('sobremim');

    return(
        <div className={"titulo_assunto " + assunto}>
            <img className="notebook" src={notebook} alt="" />
            <header className="titulo">
                <h2>Lucas Fiúza Almeida</h2>
                <h3>Engenharia de Software, Puc Minas</h3>
            </header>
            <div className="texto">
                <p>{assuntos[assunto].frase}</p>
                <h1>{assuntos[assunto].titulo}</h1>
                <p>{assuntos[assunto].descricao}</p>
            </div>
            <div className="pastas">
                <p><Link to="/sobremim" onMouseEnter={() => setAssunto("sobremim")}>Sobre mim</Link></p>
                <p><Link to="/projetos" onMouseEnter={() => setAssunto("projetos")}>Projetos</Link></p>
                <p><Link to="/experiencias" onMouseEnter={() => setAssunto("experiencias")}>Experiências</Link></p>
                <p><Link to="/contato" onMouseEnter={() => setAssunto("contato")}>Links para contato</Link></p>           
            </div>
        </div>
    )
}

export default Home;