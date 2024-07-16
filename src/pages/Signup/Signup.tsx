import {
  Box,
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  Grid,
  Link,
  TextField,
  Typography
} from "@mui/material";
import { useState } from "react";
import { useTranslation } from "react-i18next";

import PeachIcon from "../../assets/peach-fruit-icon.svg";
import { boxStyles } from "./Signup.styles";

function Signup() {
  const { t } = useTranslation();

  const [firstName, setFirstname] = useState("");
  const [surname, setSurname] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleSubmit = (event: any) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      setPasswordError("Password does not match");
      return;
    }
    setPasswordError("");
    alert(
      "Dados sendo enviados e Password correto" +
        " - " +
        firstName +
        " -  " +
        surname +
        " -  " +
        password +
        " -  " +
        email +
        " -  " +
        confirmPassword
    );
    console.log("Envio de formulário");
    console.log(firstName, surname, password, email, confirmPassword);
  };

  return (
    <>
      <Container
        component="main"
        maxWidth="xs"
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          height: "100vh"
        }}
      >
        <Box sx={{ ...boxStyles }}>
          <Box component="div" sx={{ p: 1 }}>
            <svg width="48" height="48" viewBox="0 0 48 48">
              <PeachIcon />
            </svg>
          </Box>

          <Typography component="h1" variant="h5">
            {t("signUp")}
          </Typography>

          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item sm={6} xs={12}>
                <TextField
                  required
                  fullWidth
                  id="firstName"
                  label={t("firstName")}
                  name="firstName"
                  autoComplete="firstName"
                  type="text"
                  autoFocus
                  onChange={(event) => setFirstname(event.target.value)}
                />
              </Grid>
              <Grid item sm={6} xs={12}>
                <TextField
                  required
                  fullWidth
                  name="surname"
                  label={t("surname")}
                  id="surname"
                  type="text"
                  autoFocus
                  onChange={(event) => setSurname(event.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label={t("emailAddress")}
                  name="email"
                  autoComplete="e-mail"
                  type="email"
                  autoFocus
                  onChange={(event) => setEmail(event.target.value)}
                />
              </Grid>
              <Grid item sm={6} xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label={t("password")}
                  id="password"
                  type="password"
                  autoFocus
                  onChange={(event) => setPassword(event.target.value)}
                />
              </Grid>
              <Grid item sm={6} xs={12}>
                <TextField
                  required
                  fullWidth
                  id="confirmPassword"
                  label={t("confirmPassword")}
                  name="confirmPassword"
                  autoComplete="confirmPassword"
                  type="password"
                  autoFocus
                  error={passwordError !== ""}
                  helperText={passwordError}
                  onChange={(event) => setConfirmPassword(event.target.value)}
                />
              </Grid>
            </Grid>

            <FormControlLabel
              sx={{ mt: 1 }}
              control={<Checkbox />}
              label={t("I want to receive updates via email")}
            />

            <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
              {t("signIn")}
            </Button>

            <Grid container>
              <Link href="#" variant="body2">
                {t("Already have an account? Click here to login")}
              </Link>
            </Grid>
          </Box>
        </Box>

        <Box
          sx={{
            mt: 8,
            mb: 4
          }}
        >
          <Typography variant="body2" color="textSecondary" align="center">
            {"Albicocche © "}
            {new Date().getFullYear()}
            <Link color="inherit" href="https://www.albicocche.com/" />
          </Typography>
        </Box>
      </Container>
    </>
  );
}
export default Signup;
