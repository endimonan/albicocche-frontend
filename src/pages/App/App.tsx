import Button from "@mui/material/Button";
import { useState } from "react";
import { useTranslation } from "react-i18next";

import { useAuth } from "../../context/AuthContext";

export function App() {
  const { t, i18n } = useTranslation();
  const [contador, setContador] = useState(0);
  const { handleLogout } = useAuth();

  const incrementar = () => {
    setContador(contador + 1);
  };

  const decrementar = () => {
    setContador(contador - 1);
  };

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <>
      <div
        style={{
          textAlign: "center",
          margin: "3rem"
        }}
      >
        <h1>{t("welcome")}</h1>

        <Button variant="outlined" onClick={() => changeLanguage("en")}>
          English
        </Button>
        <Button variant="outlined" onClick={() => changeLanguage("it")}>
          Italian
        </Button>
        <Button variant="outlined" onClick={() => changeLanguage("pt")}>
          Portuguese
        </Button>
        <Button onClick={() => handleLogout} type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
          Deslogar
        </Button>

        <h1
          style={{
            paddingTop: "20rem"
          }}
        >
          Counter
        </h1>
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
          <button onClick={incrementar}>Colocar ponto</button>
          <button onClick={decrementar}>Tirar ponto</button>B
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
