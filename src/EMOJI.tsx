import "./Emoji.css";
import { useState } from "react";
import Atributo from "./Atributo"; 

type Situacao = "happy" | "sick" | "dead";

const EMOJIS = new Map<Situacao, string>([
    ["happy", "😁"],
    ["sick", "🤢"],
    ["dead", "💀"],
]);

export default function Emoji() {
    
    const [situacao, setSituacao] = useState<Situacao>("happy");
    const [saude, setSaude] = useState<number>(4);
    const [energia, setEnergia] = useState<number>(3);
    const [agua, setAgua] = useState<number>(2);
    const [comida, setComida] = useState<number>(1);

    function onAlimentar() {
        if (situacao === "dead") return;
        setComida((atual) => Math.min(atual + 1, 5));
    }

    function onHidratar() {
        if (situacao === "dead") return;
        setAgua((atual) => Math.min(atual + 1, 5));
    }

    function onLigarDesligar() {
        if (situacao === "dead") return;
        setEnergia((atual) => Math.min(atual + 1, 5));
    }

    function onCiclo() {
        if (situacao === "dead") return;

        const novaComida = Math.max(comida - 1, 0);
        const novaAgua = Math.max(agua - 1, 0);
        const novaEnergia = Math.max(energia - 1, 0);

        setComida(novaComida);
        setAgua(novaAgua);
        setEnergia(novaEnergia);

        if (novaComida === 0 || novaAgua === 0 || novaEnergia === 0) {
            setSituacao("dead");
            setSaude(0);
        } else if (novaComida <= 2 || novaAgua <= 2 || novaEnergia <= 2) {
            setSituacao("sick");
            setSaude((atual) => Math.max(atual - 1, 1));
        } else {
            setSituacao("happy");
            setSaude(4);
        }
    }

    return (
        <div className="emoji">
            <div className="situacao">
                {EMOJIS.get(situacao) || "💀"}
            </div>

            <div className="atributos">
                <Atributo icone="❤️" valor={saude} />
                <Atributo icone="⚡" valor={energia} />
                <Atributo icone="💧" valor={agua} />
                <Atributo icone="🍗" valor={comida} />
            </div>

            <div className="acoes">
                <button onClick={onAlimentar}>Dar comida</button>
                <button onClick={onHidratar}>Dar água</button>
                <button onClick={onLigarDesligar}>Ligar/Desligar Luz</button>
                <button onClick={onCiclo}>Ciclo</button>
            </div>
        </div>
    );
}




