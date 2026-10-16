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
        setComida(Math.min(5, comida + 1));
    }

    function onHidratar() {
        setAgua(Math.min(5, agua + 1));
    }

    function onLigarDesligar() {
        if (situacao === "dead") return;
        setEnergia((atual) => Math.min(atual + 1, 5));
    }

    function onCiclo() {
        setComida((c) => Math.max(0, c - 1));
        setAgua((a) => Math.max(0, a - 1));
        setEnergia((s) => Math.max(0, s - 1));
        
        if (comida === 0) {
            setSaude((s) => Math.max(0, s - 1));
        }
        if (agua === 0) {
            setSaude((s) => Math.max(0, s - 1));
        }
        if (energia === 0) {
            setSaude((s) => Math.max(0, s - 1));
        }

        
        setSaude((atual) => {
            if (atual <= 0) {
                setSituacao("dead");
            } else if (atual <= 2) {
                setSituacao("sick");
            } else {
                setSituacao("happy");
            }
            return atual;
        });
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







