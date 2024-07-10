import Button from "@mui/material/Button";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { FaLock, FaUser } from "react-icons/fa";

import "./Login.css";

function Login() {
  const { t, i18n } = useTranslation();
  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const submit = (event) => {
    event.preventDefault(); //Aqui entra o backend
    alert("Dados sendo enviados" + " - " + username + " -  " + password);
    console.log("Envio de formulário"); //Aqui entra o backend
    console.log(username, password); //Aqui entra o backend
  };

  return (
    <>
      <div className="container">
        <form className="form" onSubmit={submit}>
          <div>
            <h1>Join Albicocche</h1>
          </div>
          {/* <div id="albicon">
            <img src="src\assets\peachy.jpg"></img>
          </div> */}
          <div className="input">
            <input
              type="email"
              placeholder="E-mail"
              required
              onChange={(getUser) => setUsername(getUser.target.value)}
            />
            <FaUser className="icon" />
          </div>
          <div className="input">
            <input
              type="password"
              placeholder="Password"
              required
              onChange={(getPass) => setPassword(getPass.target.value)}
            />
            <FaLock className="icon" />
          </div>
          <div className="remember">
            <label>
              <input type="checkbox" />
              Remember me?
            </label>
            <a href="login/forgot">Forgot your Passoword?</a>
          </div>
          <button className="loginButton" type="submit">
            LOGIN
          </button>
          <div className="registered">
            <p>
              Not registered? Click here to <a href="/login/singup">SIGN UP</a>
            </p>
          </div>
        </form>
      </div>
      {/* <div
        style={{
          textAlign: "center",
          margin: "9rem",
          borderRadius: "8px"
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
      </div> */}
    </>
  );
}

export default Login;
