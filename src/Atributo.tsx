import React, { useState } from 'react';
import './Atributo.css';

interface AtributoProps {
  icone: string; 
}

export const Atributo: React.FC<AtributoProps> = ({ icone }) => {
  const [valor, setValor] = useState<number>(0);

  const incrementar = () => {
    setValor((prev) => (prev < 5 ? prev + 1 : 0)); 
  };

  return (
    <div className="atributo-container">
      
      <div className="coracoes-container">
        {[...Array(5)].map((_, index) => {
          const isColorido = index < valor;
          return (
            <span 
              key={index} 
              className={`coracao ${isColorido ? 'colorido' : 'apagado'}`}
            >
              {icone} 
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

