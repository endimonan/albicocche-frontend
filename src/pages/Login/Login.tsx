import { Alert, Box, Button, Checkbox, CircularProgress, Container, Fade, FormControlLabel, Grid, Link, TextField, Typography } from "@mui/material";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

import { AuthResponse, LoginCredentials } from "../../api/services/authService";
import PeachIcon from "../../assets/peach-fruit-icon.svg";
import { useAuth } from "../../context/AuthContext";
import { boxStyles } from "./Login.styles";

function Login() {
  const { t } = useTranslation();
  const { handleLogin } = useAuth();

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showError, setShowError] = useState(false);

  const mutation = useMutation<AuthResponse, AxiosError, LoginCredentials>({
    mutationFn: ({ email, password }) => handleLogin({ email, password }),
    onSuccess: () => {
      setShowError(false);
      navigate("/");
    },
    onError: (error) => {
      setError(error.message);
      setShowError(true);
      setTimeout(() => {
        setShowError(false);
      }, 5000);
    }
  });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    mutation.mutate({ email, password });
  };

  return (
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
        <Box
          component="div"
          sx={{
            p: 1
          }}
        >
          <svg width="48" height="48" viewBox="0 0 48 48">
            <PeachIcon />
          </svg>
        </Box>

        <Typography component="h1" variant="h5">
          {t("signIn")}
        </Typography>

        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Fade in={showError}>
                <Alert severity="error" sx={{ mb: 2 }}>
                  {error}
                </Alert>
              </Fade>
              <TextField
                required
                fullWidth
                id="email"
                label={t("emailAddress")}
                name="email"
                autoComplete="email"
                autoFocus
                onChange={(event) => setEmail(event.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="password"
                label={t("password")}
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={(event) => setPassword(event.target.value)}
              />
            </Grid>
          </Grid>

          <FormControlLabel sx={{ mt: 1 }} control={<Checkbox />} label={t("rememberMe")} />

          <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }} disabled={mutation.isPending}>
            {mutation.isPending ? <CircularProgress size={24} /> : t("signIn")}
          </Button>

          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                {t("forgotPassword")}
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2">
                {t("dontHaveAnAccount")}
              </Link>
            </Grid>
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
  );
}

export default Login;
