import React, { useState } from 'react';
import './Atributo.css';

interface AtributoProps {
  nome: string; 
}

export const Atributo: React.FC<AtributoProps> = ({ nome }) => {
  
  const [valor, setValor] = useState<number>(0);

  const incrementar = () => {
    setValor((prev) => (prev < 5 ? prev + 1 : 0)); 
  };

  return (
    <div className="atributo-container">
      <span className="atributo-nome">{nome}</span>
      
      <div className="coracoes-container">
        {[...Array(5)].map((_, index) => {
          
          const isColorido = index < valor;
          return (
            <span 
              key={index} 
              className={`coracao ${isColorido ? 'colorido' : 'apagado'}`}
            >
              ❤️
            </span>
          );
        })}
      </div>

      <button className="btn-incrementar" onClick={incrementar}>
        +
      </button>
    </div>
  );
};
