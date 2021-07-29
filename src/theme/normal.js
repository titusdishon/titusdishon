import { createTheme } from "@material-ui/core/styles";

//default 'normal' theme
const normal = createTheme({
  palette: {
    primary: {
      main: "#616a70",
      contrastText: "#000000",
    },
    background: {
      default: "#ffffff",
    },
    text: {
      primary: "#000000",
    },
  },
  button: {
    primary:
      "linear-gradient(to right, #6A9113 0%, #141517  51%, #6A9113  100%)",
    contrast: "#ffffff",
  },
});

export default normal;
