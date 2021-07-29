import { createTheme } from "@material-ui/core/styles";

// fluor theme
const theme = createTheme({
  palette: {
    primary: {
      main: "#000000",
      contrastText: "#000000",
    },
    background: {
      default: "#000000",
    },
    text: {
      primary: "#ffffff",
    },
  },
  button: {
    primary: "#202945",
    contrast: "#ffffff",
  },
});

export default theme;
