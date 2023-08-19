import React, { useState } from "react";
import { generateRanges } from "./utils/generateRanges";
import "./App.css";

function App() {
  const [valor, setValor] = useState("");
  const [divisor, setDivisor] = useState("");
  const [output, setOutput] = useState("");
  
  const handleValorChange = (event) => {
    setValor(event.target.value);
  };

  const handleDivisorChange = (event) => {
    setDivisor(event.target.value);
  };

  const generateOutput = () => {
    if(!valor && !divisor){
      return alert("Preencha os campos com os valores")
    }
    const result = generateRanges(Number(valor), Number(divisor));
    setOutput(result);
  };

  return (
    <div className="app">
      <div className="content">
        <header>
          <h1>Divisor de Valores</h1>
        </header>

        <div className="inputs">
          <label>
            Valor:
            <input type="number"  placeholder="Digite o valor" value={valor} onChange={handleValorChange} />
          </label>
          <br />
          <label>
            Divisor:
            <input
              type="number"
              placeholder="Digite o divisor"
              value={divisor}
             onChange={handleDivisorChange}
            />
          </label>
          <br />
        </div>
        <button onClick={generateOutput}>
          Gerar
        </button>
        {output && (
          <div className="output">
            <h2>Resultado:</h2>
            <div className="result">
              <pre>{output}</pre>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
