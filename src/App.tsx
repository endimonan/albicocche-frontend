import React, { useState } from 'react'

function App() {
  const [contador, setContador] = useState(0)

  const incrementar = () => {
    setContador(contador + 1)
  }

  const decrementar = () => {
    setContador(contador - 1)
  }

  return (
    <>
      <div style={{ textAlign: "center", margin: "3rem" }}>
        <h1>
          Counter
        </h1>
        <p>{contador}</p>

        <button onClick={incrementar}>Incrementar</button>
        <button onClick={decrementar}>Decrementar</button>

      </div>
    </>
  )
}

export default App
