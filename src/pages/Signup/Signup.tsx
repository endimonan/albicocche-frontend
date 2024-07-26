import { Box, Button, Checkbox, Container, FormControlLabel, Grid, Link, TextField, Typography } from "@mui/material";
import { useMutation } from "@tanstack/react-query";
import { type AxiosError } from "axios";
import { useState } from "react";
import { useTranslation } from "react-i18next";

import { type SignUp, type UserResponse, register } from "../../api/services/userService";
import PeachIcon from "../../assets/peach-fruit-icon.svg";
import { boxStyles } from "./Signup.styles";

function Signup() {
  const { t } = useTranslation();

  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const { mutate } = useMutation<UserResponse, AxiosError, SignUp>({
    mutationFn: async ({ name, surname, email, password }) => await register({ name, surname, email, password }),
    onSuccess: (sucess) => {
      alert(sucess.message)
    },
    onError: (error) => {
      console.log(error);
    }
  });

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      setPasswordError("Password does not match");
      return;
    }
    setPasswordError("");
    mutate({ name, surname, email, password });
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
                  id="name"
                  label={t("firstName")}
                  name="name"
                  autoComplete="name"
                  type="text"
                  autoFocus
                  onChange={(event) => setName(event.target.value)}
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
                  error={passwordError !== ""}
                  helperText={passwordError}
                  onChange={(event) => setConfirmPassword(event.target.value)}
                />
              </Grid>
            </Grid>

            <FormControlLabel sx={{ mt: 1 }} control={<Checkbox />} label={t("I want to receive updates via email")} />

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
          </Typography>
        </Box>
      </Container>
    </>
  );
}
export default Signup;
