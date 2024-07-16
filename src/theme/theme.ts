import { createTheme } from "@mui/material/styles";

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#FF5733"
    },
    secondary: {
      main: "#E0C2FF",
      light: "#F5EBFF",
      contrastText: "#47008F"
    },
    background: {
      default: "#fff",
      paper: "#fff"
    }
  }
});

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#FF5733"
    },
    secondary: {
      main: "#E0C2FF",
      light: "#F5EBFF",
      contrastText: "#47008F"
    },
    background: {
      default: "#121212",
      paper: "#121212"
    }
  }
});
