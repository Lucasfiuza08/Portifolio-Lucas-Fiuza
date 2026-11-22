import { useState } from "react";
import foto from "../assets/foto-lucas.jpg";
import "../styles/SobreMim.css";
const evidencias = [
    { sigla: "Jv",  nome: "Java",         descricao: "Linguagem principal da faculdade: orientação a objetos e UML.",  usado: "projeto XAVi, exercícios de POO" },
    { sigla: "JS",  nome: "JavaScript",   descricao: "Front-end e back-end, e a base para o React.",                     usado: "catálogo de produtos, CRUD" },
    { sigla: "Py",  nome: "Python",       descricao: "Lógica e jogos com Pygame, com testes em Pytest.",                  usado: "jogo Ecos do Passado" },
    { sigla: "Re",  nome: "React",        descricao: "Em aprendizado: este portfólio é o primeiro projeto com ele.",      usado: "este portfólio, catálogo de produtos" },
    { sigla: "Nd",  nome: "Node.js",      descricao: "APIs REST com Express.",                                           usado: "CRUD de produtos" },
    { sigla: "H/C", nome: "HTML e CSS",   descricao: "A base de todas as páginas que construo.",                         usado: "DoAção, este portfólio" },
    { sigla: "SQL", nome: "SQL",          descricao: "Em aprendizado: bancos de dados relacionais.",                     usado: "aulas da faculdade" },
    { sigla: "Dk",  nome: "Docker",       descricao: "Contêineres para rodar aplicações e bancos de dados.",             usado: "laboratório de Spring MVC" },
    { sigla: "Git", nome: "Git e GitHub", descricao: "Versionamento, sozinho e em grupo.",                               usado: "todos os projetos" },
];

const bio = {
    pt: {
        titulo: "Relatório pessoal",
        paragrafos: [
            "Jogo videogame desde os 5 anos, e desde pequeno sempre gostei de mexer em tecnologia: computador, console, celular. Mais do que usar, eu queria entender como tudo aquilo funcionava por dentro. Essa curiosidade me trouxe para a Engenharia de Software na PUC Minas, onde estou no 2º período.",
            "No estágio de TI na Fiúza Perdigão Engenharia, ajudei na produção de protótipos e aprendi na prática com a equipe de desenvolvimento. Foi lá que percebi o que mais gosto nessa área: trabalhar em equipe e aprender algo novo a cada projeto. Na faculdade, já construí um CRUD com Node.js, um sistema em Java em grupo e um site sobre doação de sangue. Este portfólio é meu primeiro projeto em React.",
            "Nunca fiz curso de inglês fora da escola. Estudei no Colégio Loyola praticamente a vida toda, onde minha mãe é professora de inglês. Ela me ensinou muito quando eu era pequeno e até hoje me ajuda quando surge uma dúvida. Mas foi jogando que aprendi a maior parte. Aos 12 anos, passei uma semana nos Estados Unidos e pude usar tudo isso na prática. Agora quero ir além: meu objetivo é conseguir uma oportunidade de estudo, estágio ou trabalho fora do país.",
        ],
    },
    en: {
        titulo: "Personal report",
        paragrafos: [
            "I've been playing video games since I was 5, and ever since I was a kid I loved tinkering with technology: computers, consoles, phones. More than just using them, I wanted to understand how they worked under the hood. That curiosity brought me to Software Engineering at PUC Minas, where I'm in my second semester.",
            "During my IT internship at Fiúza Perdigão Engenharia, I helped build prototypes and learned hands-on from the development team. That's where I found what I enjoy most about this field: working as a team and learning something new with every project. At university, I've built a CRUD app with Node.js, a Java system as part of a group, and a website about blood donation. This portfolio is my first React project.",
            "I never took English classes outside of school. I studied at Colégio Loyola for almost my whole life, where my mom is an English teacher. She taught me a lot when I was little and still helps me whenever I have a question. But I learned most of it by playing games. When I was 12, I spent a week in the United States and got to put it all into practice. Now I want to take the next step: my goal is to land a study, internship, or work opportunity abroad.",
        ],
    },
};

const inclinacoes = [-3, 2, -1.5, 2.5, -2, 1.5, -2.5, 1, -1];

function Sobre(){
        const [selecionada, setSelecionada] = useState(0);
        const [abertura, setAbertura] = useState(true);
        const [idioma, setIdioma] = useState("pt");
        const atual = evidencias[selecionada];

        if (abertura) {
            return (
                <div className="sobre-abertura">
                    <video
                        src="/video_abertura.mp4"
                        autoPlay
                        muted
                        playsInline
                        onEnded={() => setAbertura(false)}
                    />
                    <button type="button" onClick={() => setAbertura(false)}>
                        Pular abertura
                    </button>
                </div>
            );
        }
        return(
            <main className="sobre">
                <div className="sobre-grade">

                    <div className="sobre-topo">
                        <p className="sobre-caso">Caso 01 · em investigação</p>
                        <h1>Quem é o agente?</h1>
                    </div>

                    <section className="sobre-pasta" aria-label="Pasta do agente">
                        <span className="sobre-pasta-aba">ARQUIVO 01</span>
                        <div className="sobre-papel sobre-ficha">
                            <div className="sobre-ficha-topo">
                                <div className="sobre-polaroid">
                                    <img src={foto} alt="Foto de Lucas Fiúza Almeida" />
                                </div>
                                <div className="sobre-identidade">
                                    <span className="sobre-rotulo">Nome</span>
                                    <strong>Lucas Fiúza Almeida</strong>
                                    <span>Engenharia de Software<br />PUC Minas · 2º período</span>
                                </div>
                            </div>
                            <dl className="sobre-dados">
                                <dt>Área</dt>
                                <dd>Desenvolvimento de software</dd>
                                <dt>Objetivo</dt>
                                <dd>Estudar, estagiar ou trabalhar no exterior</dd>
                                <dt>Cidade</dt>
                                <dd>Belo Horizonte, MG</dd>
                            </dl>
                            <span className="sobre-carimbo" aria-hidden="true">CONFIDENCIAL</span>
                        </div>
                    </section>

                    <section className="sobre-papel sobre-relatorio" aria-label="Relatório pessoal">
                        <span className="sobre-alfinete" aria-hidden="true"></span>
                        <div className="sobre-idioma">
                            <button type="button" className={idioma === "pt" ? "ativo" : ""} onClick={() => setIdioma("pt")}>PT</button>
                            <button type="button" className={idioma === "en" ? "ativo" : ""} onClick={() => setIdioma("en")}>EN</button>
                        </div>
                        <h2>{bio[idioma].titulo}</h2>
                        {bio[idioma].paragrafos.map((texto) => (
                            <p key={texto}>{texto}</p>
                        ))}
                    </section>

                    <div className="sobre-notas">
                        <div className="sobre-postit">
                            <span>Missão atual:</span>
                            aprender o máximo, um projeto de cada vez!
                        </div>
                        <div className="sobre-papel sobre-nota">
                            <span className="sobre-alfinete" aria-hidden="true"></span>
                            <span className="sobre-rotulo">Fora do código</span>
                            <p>Jogos de história e soulslike (favorito: Uncharted 3), séries de serial killer e de apocalipse, Fórmula 1.</p>
                        </div>
                        <div className="sobre-papel sobre-nota">
                            <span className="sobre-rotulo">Traços identificados</span>
                            <ul className="sobre-tracos">
                                <li>Trabalho em equipe</li>
                                <li>Curiosidade</li>
                                <li>Inglês</li>
                                <li>Vontade de aprender</li>
                            </ul>
                        </div>
                    </div>

                    <section className="sobre-evidencias" aria-label="Evidências: o equipamento">
                        <div className="sobre-evidencias-titulo">
                            <h2>Evidências: o equipamento</h2>
                            <span>Clique numa evidência</span>
                        </div>

                        <div className="sobre-quadro">
                            {evidencias.map((ev, i) => (
                                <button
                                    key={ev.nome}
                                    type="button"
                                    className={i === selecionada ? "evidencia ativa" : "evidencia"}
                                    style={{ "--giro": inclinacoes[i] + "deg" }}
                                    aria-pressed={i === selecionada}
                                    onClick={() => setSelecionada(i)}
                                >
                                    <span className="sobre-alfinete" aria-hidden="true"></span>
                                    <span className="evidencia-sigla" aria-hidden="true">{ev.sigla}</span>
                                    <span className="evidencia-nome">{ev.nome}</span>
                                    <span className="evidencia-num">Evidência 0{i + 1}</span>
                                </button>
                            ))}
                        </div>

                        <div className="sobre-ficha-evidencia" aria-live="polite">
                            <span className="sobre-rotulo">Ficha da evidência</span>
                            <strong>{atual.nome}</strong>
                            <p className="sobre-manuscrito">{atual.descricao}</p>
                            <p>Usado em: {atual.usado}</p>
                        </div>
                    </section>

                </div>
            </main>
        );
    }

export default Sobre;