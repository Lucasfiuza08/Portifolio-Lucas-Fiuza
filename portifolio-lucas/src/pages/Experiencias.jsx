import { useState } from "react";
import "../styles/Experiencias.css";

const missoes = [
    {
        nome: "Estagiário de TI",
        local: "Fiúza Perdigão Engenharia · Belo Horizonte",
        tipo: "Estágio · mar. 2026 a out. 2026 · 8 meses",
        status: "ok",
        descricao: "Atuei no apoio à equipe de desenvolvimento na produção de protótipos. Ajudei a construir protótipos junto com os desenvolvedores e acompanhei o dia a dia de um time de software.",
        objetivos: [
            ["Construir protótipos com os desenvolvedores", true],
            ["Acompanhar o dia a dia de um time de desenvolvimento", true],
            ["Aprender ferramentas, boas práticas e o fluxo de trabalho", true],
        ],
        recompensas: ["Trabalho em equipe", "Prototipação", "Fluxo de trabalho de software"],
    },
    {
        nome: "Engenharia de Software",
        local: "PUC Minas",
        tipo: "Bacharelado · 2026 até hoje",
        status: "andamento",
        descricao: "Graduação em Engenharia de Software. Já trabalhei com Java, orientação a objetos, UML, APIs REST e projetos em grupo.",
        objetivos: [
            ["Concluir o 1º período", true],
            ["Concluir o 2º período", false],
            ["Formatura", false],
        ],
        recompensas: ["POO", "UML", "API REST"],
    },
    {
        nome: "Próximo estágio",
        local: "A definir",
        tipo: "Estágio em desenvolvimento",
        status: "bloqueada",
        descricao: "Um estágio em desenvolvimento de software, de preferência com contato internacional.",
        objetivos: [
            ["Publicar este portfólio", true],
            ["Enviar candidaturas", false],
            ["Passar na entrevista", false],
        ],
        recompensas: ["Experiência em dev", "Projetos reais", "???"],
    },
    {
        nome: "Missão no exterior",
        local: "A definir",
        tipo: "Estudo, estágio ou trabalho",
        status: "bloqueada",
        descricao: "Estudar, estagiar ou trabalhar fora do país.",
        objetivos: [
            ["Inglês em dia", true],
            ["Encontrar uma oportunidade", false],
            ["Embarcar", false],
        ],
        recompensas: ["Experiência internacional", "Novas culturas", "???"],
    },
];

const nomesStatus = {
    ok: "Concluída",
    andamento: "Em andamento",
    bloqueada: "Bloqueada",
};

const filtros = [
    { nome: "Todas",            testa: () => true },
    { nome: "Concluídas",       testa: (m) => m.status === "ok" },
    { nome: "Ativas e futuras", testa: (m) => m.status !== "ok" },
];

function contarFeitos(missao){
    return missao.objetivos.filter((objetivo) => objetivo[1]).length;
}

function Experiencias(){
    const [selecionada, setSelecionada] = useState(0);
    const [filtro, setFiltro] = useState(0);

    const atual = missoes[selecionada];

    const totalFeitos = missoes.reduce((soma, m) => soma + contarFeitos(m), 0);
    const totalObjetivos = missoes.reduce((soma, m) => soma + m.objetivos.length, 0);
    const xp = Math.round((totalFeitos / totalObjetivos) * 100);

    return(
        <main className="exp">
            <div className="exp-conteudo">

                <div className="exp-topo">
                    <div>
                        <p className="exp-subtitulo">Histórico de serviço</p>
                        <h1>Missões</h1>
                    </div>

                    <div className="exp-jogador fatia">
                        <div className="exp-jogador-linha">
                            <strong>Agente Lucas Fiúza</strong>
                            <span className="exp-nivel">Nv. 2</span>
                        </div>
                        <span className="exp-classe">Classe: estudante de Engenharia de Software</span>
                        <div className="exp-xp" aria-hidden="true">
                            <span style={{ width: xp + "%" }}></span>
                        </div>
                        <span className="exp-xp-texto">XP da carreira: {xp}%</span>
                    </div>
                </div>

                <div className="exp-corpo">
                    <div className="exp-lista">
                        <div className="exp-abas" role="tablist" aria-label="Filtro">
                            {filtros.map((f, i) => (
                                <button
                                    key={f.nome}
                                    type="button"
                                    role="tab"
                                    aria-selected={i === filtro}
                                    className={i === filtro ? "exp-aba fatia ativa" : "exp-aba fatia"}
                                    onClick={() => {
                                        setFiltro(i);
                                        setSelecionada(missoes.findIndex(f.testa));
                                    }}
                                >
                                    {f.nome} <span>{missoes.filter(f.testa).length}</span>
                                </button>
                            ))}
                        </div>

                        {missoes.map((missao, i) =>
                            filtros[filtro].testa(missao) && (
                                <button
                                    key={missao.nome}
                                    type="button"
                                    className={"exp-missao fatia " + missao.status + (i === selecionada ? " ativa" : "")}
                                    aria-pressed={i === selecionada}
                                    onClick={() => setSelecionada(i)}
                                >
                                    <span className="exp-missao-num">0{i + 1}</span>
                                    <span className="exp-missao-info">
                                        <strong>{missao.nome}</strong>
                                        <span>{missao.local}</span>
                                        <span className="exp-progresso" aria-hidden="true">
                                            <span style={{ width: (contarFeitos(missao) / missao.objetivos.length) * 100 + "%" }}></span>
                                        </span>
                                    </span>
                                    <span className={"exp-selo " + missao.status}>{nomesStatus[missao.status]}</span>
                                </button>
                            )
                        )}
                    </div>
                    <section className="exp-detalhe corte" aria-live="polite">
                        <div className="exp-detalhe-topo">
                            <span className={"exp-selo " + atual.status}>{nomesStatus[atual.status]}</span>
                            <span className="exp-tipo">{atual.tipo}</span>
                        </div>
                        <h2>{atual.nome}</h2>
                        <p className="exp-local">{atual.local}</p>
                        <p className="exp-descricao">{atual.descricao}</p>

                        <div className="exp-bloco">
                            <div className="exp-bloco-titulo">
                                <span>Objetivos</span>
                                <span>{contarFeitos(atual)}/{atual.objetivos.length}</span>
                            </div>
                            <ul className="exp-objetivos">
                                {atual.objetivos.map(([texto, feito]) => (
                                    <li key={texto} className={feito ? "feito" : ""}>
                                        <span className="exp-check" aria-hidden="true">{feito ? "✓" : ""}</span>
                                        {texto}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="exp-bloco">
                            <div className="exp-bloco-titulo"><span>Recompensas</span></div>
                            <ul className={atual.status === "bloqueada" ? "exp-recompensas travadas" : "exp-recompensas"}>
                                {atual.recompensas.map((r) => (
                                    <li key={r} className="fatia"><span aria-hidden="true">+</span>{r}</li>
                                ))}
                            </ul>
                        </div>
                    </section>
                </div>

            </div>
        </main>
    );
}

export default Experiencias;