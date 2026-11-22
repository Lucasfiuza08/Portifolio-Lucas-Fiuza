import { useState } from "react";
import printEcos from "../assets/print-ecos.jpg";
import "../styles/Projetos.css";

const projetos = [
    {
        nome: "Ecos do Passado",
        frase: "Um caso de detetive em forma de jogo.",
        descricao: "Jogo feito em grupo na disciplina de Algoritmos. O jogador é um detetive que vira cartas de evidências, suspeitos e motivos procurando pares lógicos. Cada par certo revela um pedaço da história, e cada fase tem um cenário diferente: mansão, trem e Londres.",
        tecnologias: ["Python", "Pygame", "Pytest"],
        link: "https://github.com/Lucasfiuza08/jogo-Ecos-do-passado",
        imagem: printEcos,
    },
    {
        nome: "DoAção",
        frase: "Um site para salvar vidas.",
        descricao: "Site feito em grupo para facilitar a doação de sangue, construído a partir de entrevistas com doadores. [Descreva a sua parte no projeto.]",
        tecnologias: ["HTML", "CSS", "JavaScript"],
        link: "https://github.com/ICEI-PUC-Minas-PPLES-TI/plf-es-2026-2-ti2-7587100-doacao",
        imagem: null,
    },
    {
        nome: "Este portfólio",
        frase: "A operação em andamento.",
        descricao: "Meu primeiro projeto em React, com rotas, estado e um visual de agência secreta. Cada página tem um estilo próprio.",
        tecnologias: ["React", "Vite", "React Router"],
        link: "https://github.com/Lucasfiuza08/Portifolio-Lucas-Fiuza",
        imagem: null,
    },
];

function Projetos(){
    const [selecionado, setSelecionado] = useState(0);
    const atual = projetos[selecionado];

    return(
        <main className="proj">
            <div className="proj-faixa" aria-hidden="true"></div>

            <section className="proj-cena" aria-live="polite">
                <div className="proj-imagem">
                    {atual.imagem ? (
                        <img src={atual.imagem} alt={"Tela do projeto " + atual.nome} />
                    ) : (
                        <span>[Print de {atual.nome}]</span>
                    )}
                </div>

                <div className="proj-texto">
                    <p className="proj-contador">
                        Operação 0{selecionado + 1} de 0{projetos.length}
                    </p>
                    <h1>{atual.nome}</h1>
                    <p className="proj-frase">{atual.frase}</p>
                    <p className="proj-descricao">{atual.descricao}</p>
                    <p className="proj-tecnologias">
                        Com {atual.tecnologias.map((tec) => (
                            <span key={tec}>{tec}</span>
                        ))}
                    </p>
                    {atual.link ? (
                        <a className="proj-botao" href={atual.link} target="_blank" rel="noreferrer">
                            Ver no GitHub
                        </a>
                    ) : (
                        <p className="proj-privado">Código em repositório privado</p>
                    )}
                </div>
            </section>

            <nav className="proj-pelicula" aria-label="Escolha um projeto">
                <div className="proj-furos" aria-hidden="true"></div>
                <div className="proj-quadros">
                    {projetos.map((projeto, i) => (
                        <button
                            key={projeto.nome}
                            type="button"
                            className={i === selecionado ? "proj-quadro ativo" : "proj-quadro"}
                            aria-pressed={i === selecionado}
                            onClick={() => setSelecionado(i)}
                        >
                            <span className="proj-quadro-num">0{i + 1}</span>
                            <span className="proj-quadro-nome">{projeto.nome}</span>
                        </button>
                    ))}
                </div>
                <div className="proj-furos" aria-hidden="true"></div>
            </nav>
        </main>
    );
}

export default Projetos;