import "./Atributo.css";


export interface AtributoProps {
    icone: string;
    valor: number; 
}

export function Atributo({ icone, valor }: AtributoProps) {
    return (
        <div className="atributo">
            <span className="icone">{icone}</span>
            <span className="valor">{valor}</span>
        </div>
    );
}


