import { useState } from "react";
import "../styles/Contato.css";

const canais = [
    { rotulo: "E-mail",   valor: "lucasfiuzaalmeida@gmail.com",   link: "mailto:lucasfiuzaalmeida@gmail.com" },
    { rotulo: "LinkedIn", valor: "linkedin.com/in/lucas-fiúza",    link: "https://www.linkedin.com/in/lucas-fi%C3%BAza-353b7b40a/" },
    { rotulo: "GitHub",   valor: "github.com/Lucasfiuza08",        link: "https://github.com/Lucasfiuza08" },
];

function Contato(){
    const [virado, setVirado] = useState(false);
    const [enviado, setEnviado] = useState(false);

    function enviar(evento){
        evento.preventDefault();
        setEnviado(true);
    }

    return(
        <main className="cont">
            <div className="cont-grade">

                <div className="cont-topo">
                    <p className="cont-arquivo">Arquivo 04 · Contato</p>
                    <h1>Meu cartão, sua mensagem.</h1>
                    <p className="cont-intro">
                        Vire o cartão para ver como me encontrar, ou escreva uma carta. Estou em busca do
                        meu primeiro estágio em desenvolvimento, aqui ou fora do país.
                    </p>
                </div>

                <section className="cont-cartao-area" aria-label="Cartão de visita">
                    <div className="cont-cena3d">
                        <div className={virado ? "cont-cartao virado" : "cont-cartao"}>
                            <div className="cont-face cont-frente" aria-hidden={virado}>
                                <div className="cont-frente-topo">
                                    <span className="cont-emblema" aria-hidden="true">LF</span>
                                    <span className="cont-credencial">Credencial nº 08</span>
                                </div>
                                <div className="cont-frente-nome">
                                    <strong>Lucas Fiúza Almeida</strong>
                                    <span>Desenvolvedor de software em formação</span>
                                    <small>Engenharia de Software · PUC Minas</small>
                                </div>
                            </div>

                            <div className="cont-face cont-verso" aria-hidden={!virado}>
                                <strong>Canais seguros</strong>
                                <ul>
                                    {canais.map((canal) => (
                                        <li key={canal.rotulo}>
                                            <span>{canal.rotulo}</span>
                                            <a href={canal.link} target="_blank" rel="noreferrer" tabIndex={virado ? 0 : -1}>
                                                {canal.valor}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="cont-cartao-acoes">
                        <button type="button" className="cont-botao" onClick={() => setVirado(!virado)}>
                            {virado ? "Ver a frente" : "Virar o cartão"}
                        </button>
                        <span>Resposta em até 2 dias · português e inglês</span>
                    </div>
                </section>

                <section className="cont-carta-area" aria-label="Escrever uma carta" aria-live="polite">
                    {enviado ? (
                        <div className="cont-enviada">
                            <div className="cont-envelope" aria-hidden="true">
                                <span className="cont-selo">LF</span>
                            </div>
                            <h2>Carta lacrada e enviada</h2>
                            <p>Recebi sua mensagem. Respondo em até 2 dias no e-mail que você informou.</p>
                            <button type="button" className="cont-botao-linha" onClick={() => setEnviado(false)}>
                                Escrever outra carta
                            </button>
                        </div>
                    ) : (
                        <form className="cont-carta" onSubmit={enviar}>
                            <p className="cont-para">Para: Agente Lucas Fiúza</p>

                            <label className="cont-linha">
                                <span>De (seu nome)</span>
                                <input type="text" name="nome" placeholder="Seu nome" required />
                            </label>
                            <label className="cont-linha">
                                <span>Resposta para (seu e-mail)</span>
                                <input type="email" name="email" placeholder="voce@email.com" required />
                            </label>
                            <label className="cont-linha">
                                <span>Mensagem</span>
                                <textarea name="mensagem" rows="5" placeholder="Escreva aqui" required></textarea>
                            </label>


                            <div className="cont-assinatura">
                                <span>Atenciosamente,</span>
                                <button type="submit" className="cont-lacrar">
                                    <span className="cont-selo pequeno" aria-hidden="true">LF</span>
                                    Lacrar e enviar
                                </button>
                            </div>
                        </form>
                    )}
                </section>

            </div>
        </main>
    );
}

export default Contato;