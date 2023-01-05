import { createTheme } from "@mui/material";
import { green, orange, purple } from "@mui/material/colors";

const theme = createTheme({
    status: {
      danger: orange[500],
    },
    palette: {
        primary: {
          main: purple[500],
        },
        secondary: {
          light: '#ffffff',
          main: green[500],
        },
        lightColor: {
          main: '#ffffff',
        }
      },
  });

export default theme;