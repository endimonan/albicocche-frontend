import Button from "@mui/material/Button";
import { useState } from "react";

function App() {
  const [contador, setContador] = useState(0);

  const incrementar = () => {
    setContador(contador + 1);
  };

  const decrementar = () => {
    setContador(contador - 1);
  };

  return (
    <> 
      <div
        style={{
          textAlign: "center",
          margin: "3rem"
        }}
      >
        <h1>Counter</h1>
        <p>{contador}</p>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "2rem",
            gap: "1rem"
          }}
        >
          <h3>Botao natural do html</h3>
          <button onClick={incrementar}>Incrementar</button>
          <button onClick={decrementar}>Decrementar</button>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "2rem",
            gap: "1rem"
          }}
        >
          <h3>Botao do Material UI</h3>
          <Button variant="contained" onClick={incrementar}>
            Incrementar
          </Button>
          <Button variant="contained" onClick={decrementar}>
            Decrementar
          </Button>
        </div>
      </div>
    </>
  );
}

export default App;
