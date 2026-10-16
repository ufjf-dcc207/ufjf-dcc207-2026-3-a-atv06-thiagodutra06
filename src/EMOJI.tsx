import "./Emoji.css";
import { useState } from "react";
import { Atributo } from "./Atributo";

type Situacao = "happy" | "sick" | "dead";

const EMOJIS = new Map<Situacao, string>([
    ["happy", "😁"],
    ["sick", "🤢"],
    ["dead", "💀"],
]);

export default function Emoji() {
    
    const [situacao, setSituacao] = useState<Situacao>("happy");

    
    const [fome, setFome] = useState<number>(5);
    const [sede, setSede] = useState<number>(5);
    const [luzAcesa, setLuzAcesa] = useState<boolean>(true);

    
    function onAlimentar() {
        if (situacao === "dead") return;
        setFome((fomeAtual) => Math.min(fomeAtual + 1, 5));
        
        
        if (situacao === "sick" && fome + 1 >= 3 && sede >= 3) {
            setSituacao("happy");
        }
    }

    
    function onHidratar() {
        if (situacao === "dead") return;
        setSede((sedeAtual) => Math.min(sedeAtual + 1, 5));

        if (situacao === "sick" && sede + 1 >= 3 && fome >= 3) {
            setSituacao("happy");
        }
    }

    
    function onLigarDesligar() {
        if (situacao === "dead") return;
        setLuzAcesa((estadoAnterior) => !estadoAnterior);
    }

    
    function onCiclo() {
        if (situacao === "dead") return;

        
        const novaFome = Math.max(fome - 1, 0);
        const novaSede = Math.max(sede - 1, 0);

        setFome(novaFome);
        setSede(novaSede);

        
        if (novaFome === 0 || novaSede === 0) {
            setSituacao("dead");
        } else if (novaFome <= 2 || novaSede <= 2) {
            setSituacao("sick");
        } else {
            setSituacao("happy");
        }
    }

    return (
        <div className={`emoji ${!luzAcesa ? "luz-apagada" : ""}`}>
            <div className="situacao">
                {EMOJIS.get(situacao) || "💀"}
            </div>

            <div className="atributos">
                <Atributo icone="❤️" valor={situacao === "dead" ? 0 : 5} />
                <Atributo icone="⚡" valor={luzAcesa ? 5 : 1} />
                <Atributo icone="💧" valor={sede} />
                <Atributo icone="🍗" valor={fome} />
            </div>

            <div className="acoes">
                <button onClick={onAlimentar}>Dar comida</button>
                <button onClick={onHidratar}>Dar água</button>
                <button onClick={onLigarDesligar}>
                    {luzAcesa ? "Desligar Luz" : "Ligar Luz"}
                </button>
                <button onClick={onCiclo}>Ciclo</button>
            </div>
        </div>
    );
}



