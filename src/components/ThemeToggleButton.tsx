import { Brightness4, Brightness7 } from "@mui/icons-material";
import { IconButton } from "@mui/material";

import { useThemeContext } from "../context/ThemeContext";

const ThemeToggleButton = () => {
  const { mode, toggleColorMode } = useThemeContext();

  return (
    <IconButton onClick={toggleColorMode} color="inherit">
      {mode === "dark" ? <Brightness7 /> : <Brightness4 />}
    </IconButton>
  );
};

export default ThemeToggleButton;
