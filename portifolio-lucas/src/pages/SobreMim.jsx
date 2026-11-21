import { useState } from "react";
import foto from "../assets/foto-lucas.jpg";
import "../styles/SobreMim.css";
const evidencias = [
    { sigla: "Jv",  nome: "Java",         descricao: "Linguagem principal da faculdade. Orientação a objetos e UML.", usado: "projeto XAVi, exercícios de POO" },
    { sigla: "JS",  nome: "JavaScript",   descricao: "Front-end sem framework e base para o React.",                  usado: "CRUD de produtos" },
    { sigla: "Re",  nome: "React",        descricao: "Em aprendizado: este portfólio é o primeiro projeto com ele.",  usado: "este portfólio" },
    { sigla: "Nd",  nome: "Node.js",      descricao: "API REST com Express.",                                         usado: "CRUD de produtos" },
    { sigla: "H/C", nome: "HTML e CSS",   descricao: "A base de todas as páginas que construo.",                      usado: "DoAção, este portfólio" },
    { sigla: "Git", nome: "Git e GitHub", descricao: "Versionamento, sozinho e em grupo.",                            usado: "todos os projetos" },
];

// Inclinação de cada cartão de evidência (só visual).
const inclinacoes = [-3, 2, -1.5, 2.5, -2, 1.5];

function Sobre(){
        const [selecionada, setSelecionada] = useState(0);
        const [abertura, setAbertura] = useState(true);
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
                                <dt>Missão</dt>
                                <dd>Primeiro estágio em desenvolvimento</dd>
                            </dl>
                            <span className="sobre-carimbo" aria-hidden="true">CONFIDENCIAL</span>
                        </div>
                    </section>

                    <section className="sobre-papel sobre-relatorio" aria-label="Relatório pessoal">
                        <span className="sobre-alfinete" aria-hidden="true"></span>
                        <h2>Relatório pessoal</h2>
                        <p>
                            Jogo videogame desde os 5 anos, e desde pequeno sempre gostei de mexer em tecnologia:
                            computador, console, celular. Mais do que usar, eu queria entender como tudo aquilo
                            funcionava por dentro. Essa curiosidade me trouxe para a Engenharia de Software na
                            PUC Minas, onde estou no 2º período.
                        </p>
                        <p>
                            No estágio de TI na Fiúza Perdigão Engenharia, ajudei na produção de protótipos e
                            aprendi na prática com a equipe de desenvolvimento. Foi lá que percebi o que mais
                            gosto nessa área: trabalhar em equipe e aprender algo novo a cada projeto. Na
                            faculdade, já construí um CRUD com Node.js, um sistema em Java em grupo e um site
                            sobre doação de sangue. Este portfólio é meu primeiro projeto em React.
                        </p>
                        <p>
                            Nunca fiz curso de inglês fora da escola. Estudei no Colégio Loyola praticamente a
                            vida toda, onde minha mãe é professora de inglês. Ela me ensinou muito quando eu era
                            pequeno e até hoje me ajuda quando surge uma dúvida. Mas foi jogando que aprendi a
                            maior parte. Aos 12 anos, passei uma semana nos Estados Unidos e pude usar tudo isso
                            na prática. Agora quero ir além: meu objetivo é conseguir uma oportunidade de estudo,
                            estágio ou trabalho fora do país.
                        </p>
                    </section>

                    {/* Coluna de anotações */}
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

                    {/* Evidências: tecnologias */}
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